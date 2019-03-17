import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, TextInput, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import Search from '../../Components/search/';
import Cover from '../../resources/img/cover.png';
import Arrow from '../../resources/img/Shape.png';
import SearchIcon from '../../resources/img/search.png';
import Bread from '../../resources/img/bread.png';
import Veg from '../../resources/img/veg.png';
import Fruit from '../../resources/img/fruit.png';
import Snacks from '../../resources/img/nachos.png';
import Nuts from '../../resources/img/nuts1.png';
import Pasta from '../../resources/img/oats.png';
import Recept from '../../resources/img/pasta.png';
import Mitt from '../../resources/img/path_14.png';

import styles from './styles';



const propTypes = {
	navigation: PropTypes.object.isRequired,
};
export default class FoodSections extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search: '',
			input: '',
		};
	}
    
	UNSAFE_componentWillMount = () => {
		//this.searchFunction();
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

	toHome = () => {
    	this.props.navigation.navigate('Home');
	}
	toSubSection = (foodType) => {
		var date = this.props.navigation.state.params.date;
	//	alert(date)
    	this.props.navigation.navigate('FoodSubsection', {foodType, date });
	}
	toMittag = () => {
    	this.props.navigation.navigate('MittIntag');
	}

	render() {
		const {
			container,
			coverPhoto,
			pictureRow,
			imageStyle,
			searchBar,
			inputStyle,
			searchView,
			searchIconStyle,
			backButtonStyle,
			mittImage,
			foodNameContainer,
			foodNameText,
			mittContainer,
			mittText
		} = styles;
		if(this.state.input == '' && this.state.search =='') {
			Keyboard.dismiss();
		}
		return (
			<View style={container}>
				<Image source={Cover} style={coverPhoto} />
				<TouchableOpacity style={backButtonStyle} onPress={this.toHome}>
					<Image source={Arrow}  />
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
							search={this.state.search}
							date={this.props.navigation.state.params.date}
							navigation= {this.props.navigation}
						/>
				
						 :<ScrollView>
							<View style={pictureRow}>

								<TouchableOpacity onPress={() => this.toSubSection('Bröd-skorpor-kex')}>
									<Image style={imageStyle} source={Bread}/>
									<View style={foodNameContainer} >
										<Text style={foodNameText} >Bröd/skorpor/kex</Text>
									</View>
								</TouchableOpacity>

								<TouchableOpacity onPress={() => this.toSubSection('Frukt-bär')}>
									<Image style={imageStyle} source={Fruit}/>
									<View style={foodNameContainer} >
										<Text style={foodNameText} >Frukt/bär</Text>
									</View>
								</TouchableOpacity>
						
							</View>

							<View style={pictureRow}>

								<TouchableOpacity onPress={() => this.toSubSection('Grönsaker-baljväxter-groddar-rotfrukter-potatis')}>
									<Image style={imageStyle} source={Veg}/>
									<View style={foodNameContainer} >
										<Text style={foodNameText} >Grönsaker/baljväxter/</Text>
										<Text style={foodNameText} >groddar/rotfrukter/</Text>
										<Text style={foodNameText} >potatis</Text>
									</View>
							
								</TouchableOpacity>

								<TouchableOpacity onPress={() => this.toSubSection('Nötter-frön')}>
									<Image style={imageStyle} source={Nuts}/>
									<View style={foodNameContainer} >
										<Text style={foodNameText} >Nötter/frön</Text>
									</View>
								</TouchableOpacity>
						
							</View>

							<View style={pictureRow}>
								<TouchableOpacity onPress={() => this.toSubSection('Pasta-gryn-gröt-flingor-mjöl-müsli')}>
									<Image style={imageStyle} source={Pasta}/>
									<View style={foodNameContainer} >
										<Text style={foodNameText} >Pasta/gryn/gröt/</Text>
										<Text style={foodNameText} >flingor/mjöl/müsli</Text>
									</View>
								</TouchableOpacity>

								<TouchableOpacity onPress={() => this.toSubSection('Snacks')}>
									<Image style={imageStyle} source={Snacks}/>
									<View style={foodNameContainer} >
										<Text style={foodNameText} >Snacks</Text>
									</View>
								</TouchableOpacity>
					
						
						
							</View>

							<View style={pictureRow}>
								<TouchableOpacity onPress={() => this.toSubSection('Recept (endast gjorda enligtrecepthäftet)')}>
									<Image style={imageStyle} source={Recept}/>
									<View style={foodNameContainer} >
										<Text style={foodNameText} >Recept</Text>
										<Text style={foodNameText} >(endast gjorda</Text>
										<Text style={foodNameText} >enligtrecepthäftet)</Text>
									</View>
								</TouchableOpacity>
						
								<TouchableOpacity style={imageStyle} onPress={() => this.toMittag()} >
									<View style={mittContainer}>
										<Text style={mittText} >
									Mitt intag
										</Text>
										<Image style={mittImage} source={Mitt}/>
									</View>
								</TouchableOpacity>
						
							</View>
						</ScrollView>
				}
				
			</View>
		);
	}
}

FoodSections.propTypes = propTypes;	