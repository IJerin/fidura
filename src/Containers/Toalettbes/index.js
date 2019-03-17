import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, AsyncStorage, Alert } from 'react-native';
import firebase from '../../../config/firebaseConfig.js';
import PropTypes from 'prop-types';

import Button from '../../Components/Button/';
import Logo from '../../resources/img/logo.png';
import Arrow from '../../resources/img/Shape.png';
import Type1 from '../../resources/img/type1.png';
import Type2 from '../../resources/img/type2.png';
import Type3 from '../../resources/img/type3.png';
import Type4 from '../../resources/img/type4.png';
import Type5 from '../../resources/img/type5.png';
import Type6 from '../../resources/img/type6.png';
import Type7 from '../../resources/img/type7.png';

import CheckBox from '../../Components/CheckBox/';
import styles from './styles';

const propTypes = {
	navigation: PropTypes.object.isRequired,
};


export default class Toalettbes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			selectedItem: [],
		};
	}



	toHandelser = () => {
		this.props.navigation.navigate('Handelser');
	}
	
	onChangeState = (val, title) => {
		if(val == false ) {
			var tempArray = this.state.selectedItem;
			tempArray = tempArray.filter(res => res !== title);
			this.setState({
				selectedItem: tempArray,
				checked: val
			});
		} else {
			this.state.selectedItem.push(title);
			this.setState({
				checked: val
			});
		}
	}



	KlarPressed = () => {
		const { selectedItem } = this.state;
		var date = new Date().getDate(); //Current Date
		var month = new Date().getMonth() + 1; //Current Month
		var year = new Date().getFullYear();
		const today = date+ '-' + month + '-' + year;

		var items = '';
		for (var i = 0; i < selectedItem.length; i++ ) {
			items = items + selectedItem[i] + ' ';
		}
		Alert.alert('Toalettbesök Registrerat', `${items}`);
		AsyncStorage.getItem('userToken').then(userToken => {
			firebase
				.database()
				.ref(`user/${userToken}/${today}/Toalettbes`)
				.push({
					type: selectedItem,
				});
		});
		this.toHandelser();
	}

	render() {
    	const {
			container,
			headerStyle,
			backButtonStyle,
			fiduraLogoStyleView,
    		fiduraIcon,
			questionText,
			buttonStyle,
			boxBody,
			imageTextContainer
    	} = styles;

    	return (
    		<View style={container}>
				<View style={headerStyle}>
    				<TouchableOpacity style={backButtonStyle} onPress={this.toHandelser}>
    					<Image source={Arrow}  />
    				</TouchableOpacity>

    				<View style={fiduraLogoStyleView}>
    					<Image source={Logo} style={fiduraIcon} />
    				</View>

    			</View>
				<ScrollView style={{marginBottom: 20,  }}>
					<Text style={questionText}>Ange alla toalettbesök där du har bajsat idag.
						Ange konsistensen enligt Bristolskalan.</Text>
					<View style={boxBody}>
    					<CheckBox
							title={'Type 1'}
							checked={this.state.checked}
							onChangeState={this.onChangeState}
						/>
						<View style={imageTextContainer}>
							<Image  source={Type1}/>
							<Text style={[questionText, {marginLeft: 20, marginRight: 10}]}>Separate hårda klumpar som liknar nötter</Text>
						</View>
					</View>

					<View style={boxBody}>
    					<CheckBox
							title={'Type 2'}
							checked={this.state.checked}
							onChangeState={this.onChangeState}
						/>
						<View style={imageTextContainer}>
							<Image  source={Type2}/>
							<Text style={[questionText, {marginLeft: 20, marginRight: 10}]}>Korvformad med klumpar</Text>
						</View>
					</View>
					
					<View style={boxBody}>
    					<CheckBox
							title={'Type 3'}
							checked={this.state.checked}
							onChangeState={this.onChangeState}
						/>
						<View style={imageTextContainer}>
							<Image  source={Type3}/>
							<Text style={[questionText, {marginLeft: 20, marginRight: 10}]}>Liknar en korv med sprickor på utsidan</Text>
						</View>
					</View>

					<View style={boxBody}>
    					<CheckBox
							title={'Type 4'}
							checked={this.state.checked}
							onChangeState={this.onChangeState}
						/>
						<View style={imageTextContainer}>
							<Image  source={Type4}/>
							<Text style={[questionText, {marginLeft: 20, marginRight: 10}]}>Liknar en korv, smidig och mjuk</Text>
						</View>
					</View>

					<View style={boxBody}>
    					<CheckBox
							title={'Type 5'}
							checked={this.state.checked}
							onChangeState={this.onChangeState}
						/>
						<View style={imageTextContainer}>
							<Image  source={Type5}/>
							<Text style={[questionText, {marginLeft: 20, marginRight: 10}]}>Mjuka klumpar med skarpa kanter (lätta att få ut)</Text>
						</View>
					</View>

					<View style={boxBody}>
    					<CheckBox
							title={'Type 6'}
							checked={this.state.checked}
							onChangeState={this.onChangeState}
						/>
						<View style={imageTextContainer}>
							<Image  source={Type6}/>
							<Text style={[questionText, {marginLeft: 20, marginRight: 10}]}>Småbitar</Text>
						</View>
					</View>

					<View style={boxBody}>
    					<CheckBox
							title={'Type 7'}
							checked={this.state.checked}
							onChangeState={this.onChangeState}
						/>
						<View style={imageTextContainer}>
							<Image  source={Type7}/>
							<Text style={[questionText, {marginLeft: 20, marginRight: 10}]}>Vattnig utan klumpar. Enbart vätska</Text>
						</View>
					</View>
				
					<TouchableOpacity style={buttonStyle} onPress={this.KlarPressed}>
    					<Button title={'Klar'} width={80} />
    				</TouchableOpacity>
				</ScrollView>
    		</View>
    	);
	}
}
Toalettbes.propTypes = propTypes;

