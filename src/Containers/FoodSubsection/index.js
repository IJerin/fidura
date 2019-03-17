import React, { Component } from 'react';
import { View, Image, TouchableOpacity, TextInput, ScrollView, Text, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import firebase from '../../../config/firebaseConfig.js';

import Search from '../../Components/search/';
import ListView from '../../Components/ListViewWithModal/';
import Cover from '../../resources/img/cover.png';
import Arrow from '../../resources/img/Shape.png';
import SearchIcon from '../../resources/img/search.png';
import Button from '../../Components/Button/';
import styles from './styles';

const propTypes = {
	navigation: PropTypes.object.isRequired,
};
export default class FoodSubsection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			checked: false,
			arrayOfChildrenButton: [],
			arrayOfChildrenImage: [],
			path: 'food/' + this.props.navigation.state.params.foodType + '/',
			pathArray: ['food', this.props.navigation.state.params.foodType ],
			title: this.props.navigation.state.params.foodType,
			date: this.props.navigation.state.params.date,
			isReady: false,
			isModalVisible: false,
			selectedName: '',
			selectedImage: '',
			antal: '',
			search: '',
			input: '',
		};
	}

	UNSAFE_componentWillMount() {
		
		this.fetchData();
	}

	fetchData = () => {
		const { arrayOfChildrenButton, path } = this.state;

		let itemArray = [];
		firebase
			.database()
			.ref(path)
			.once('value', snapshot => {
				snapshot.forEach(data => {
					if(data.val().img) {
						var item = {};
						item.name = data.key,
						item.img = data.val().img,
						item.measureType = data.val().measureType,
						itemArray = itemArray.concat([item]);
						
						//arrayOfChildrenImage.push(itemArray);
						
					}
					else {
						arrayOfChildrenButton.push(data.key);
					}
					
				});
			}).then(() => {
				this.setState({
					arrayOfChildrenImage: itemArray,
					isReady: true
				});
			//	alert(JSON.stringify(itemArray))
			});
	}


	buttonPressed = (val) => {
		const { path, pathArray } = this.state;
		pathArray.push(val);
		const str = path + val + '/';

		this.setState({
			path: str,
			title: val,
			arrayOfChildrenButton: [],
			arrayOfChildrenImage: [],
		}, () => {
			this.fetchData();
		});
	}

	backButton = () => {
		const { pathArray } = this.state;
		var temp = '';
		pathArray.length = pathArray.length-1;
		if(pathArray.length==1) {
			this.props.navigation.navigate('FoodSections');
		}
		else {
			for(var i = 0; i< pathArray.length; i++) {
				temp = temp + pathArray[i] + '/';
				
			}
			this.setState({
				path: temp,
				title: pathArray[pathArray.length-1],
				arrayOfChildrenButton: [],
				arrayOfChildrenImage: [],
			}, () => {
				this.fetchData();
			});
		}
	
	}

	searchFunction = () => {
		const { input } = this.state;
		//alert (input)
		this.setState({ search: input }
		
		);
		Keyboard.dismiss();
	}

	input = (input) => {
		this.setState({
			input
		}, () => {
			if (input == '') {
				this.setState({ search: ''});
			}
		}
		);
	}


	render() {

		const {
			container,
			coverPhoto,
			searchBar,
			inputStyle,
			searchIconStyle,
			searchView,
			backButtonStyle,
			titleText,
		} = styles;
		if(this.state.input == '' && this.state.search =='') {
			Keyboard.dismiss();
		}
		return (
			<View style={container}>
				<Image source={Cover} style={coverPhoto} />
				<TouchableOpacity style={backButtonStyle} onPress={this.backButton}>
					<Image source={Arrow} />
				</TouchableOpacity>
				<View style={searchBar}>
					<TextInput
						style={inputStyle}
						placeholder={'Sök livsmedel'}
						placeholderTextColor={'#333333'}
						selectionColor={'#333333'}
						underlineColorAndroid={'transparent'}	
						onChangeText={input => this.input(input)}
    				/>
					<TouchableOpacity style={searchView} onPress={this.searchFunction} >
						<Image source={SearchIcon} style={searchIconStyle} />
					</TouchableOpacity>
				</View>
				{
					(this.state.search)
						?<Search
							search= {this.state.search}
							date={this.state.date}
							navigation= {this.props.navigation}
						/>
						:<View style={{ flex: 1}}>
							<View>
								<Text style={titleText}>{this.state.title}</Text>
							</View>
							<ScrollView>
								<ListView 
									itemList= {this.state.arrayOfChildrenImage}
									date={this.state.date}
									navigation= {this.props.navigation}
								/>
							
								{this.state.arrayOfChildrenButton.map((val, key) =>
									<TouchableOpacity key={key} onPress={() => this.buttonPressed(val)}>
										<Button title={val} arrowImage />
									</TouchableOpacity>
								)}
							</ScrollView>

						</View>
				}
			</View>
				
		);
	}
}
FoodSubsection.propTypes = propTypes;

