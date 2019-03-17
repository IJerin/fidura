import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, BackHandler, AsyncStorage } from 'react-native';

import PropTypes from 'prop-types';
import Logo from '../../resources/img/logo.png';
import KostIcon from '../../resources/img/kostIcon.png';
import MedecineIcon from '../../resources/img/medecineIcon.png';
import BellIcon from '../../resources/img/bellIcon.png';
import Path from '../../resources/img/Path.png';
import styles from './styles';


const propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default class Home extends Component {


	UNSAFE_componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	buttonGenerator = (title,icon) => {
		const {
			buttonStyle,
			buttonIcon,
			buttonText,
			buttonArrow
		} = styles;
		return (
			<View style={buttonStyle}>
				<Image style={buttonIcon} source={icon}/>
				<Text style={buttonText} >{title}</Text>
				<Image style={buttonArrow} source={Path}/>
			</View>
		);
	}

	toFoodSections = () => {
		var today = new Date().getDate(); //Current Date
		var month = new Date().getMonth() + 1; //Current Month
		var year = new Date().getFullYear();
		const date = today+ '-' + month + '-' + year;
		
		this.props.navigation.navigate('FoodSections', {date} );
	}
	toMedeciner = () => {
		this.props.navigation.navigate('Medeciner');
	}
	toHandelser = () => {
		this.props.navigation.navigate('Handelser');
	}
	handleBackButtonClick = () => {
		AsyncStorage.removeItem('userToken', (error) => console.log(error));
		this.props.navigation.navigate('Login');
		return true;
	}

	render() {
		const {
			container,
			logo,
			upperText,
			downText
		} = styles;

		return (
			<View style={container}>

				<Image source={Logo} style={logo}/>

				<View style={{ width: 280, marginBottom: 10 }}>
					<Text style={upperText}>
						Fidura-appen är gjord för dig
						som är deltagare i Fidura-
						studien. Här kan du registrera
						ditt intag av fiberrika livsmedel,
						mediciner och händelser
					</Text>
				</View>

				<TouchableOpacity onPress={this.toFoodSections}>
					{this.buttonGenerator('Kost', KostIcon)}
				</TouchableOpacity>

				<TouchableOpacity onPress={this.toMedeciner} >
					{this.buttonGenerator('Mediciner', MedecineIcon)}
				</TouchableOpacity>

				<TouchableOpacity onPress={this.toHandelser}>
					{this.buttonGenerator('Handeler', BellIcon)}
				</TouchableOpacity>

				<View style={{ width: 266, alignItems: 'center' }}>
					<Text style={downText}>
						Vid oklarheter kontakta
					</Text>
					<Text style={downText}>
						dietist Rebecca Ahlin,
					</Text>
					<Text style={downText}>
						rebecca.ahlin@vgregion.se, 
					</Text>
					<Text style={downText}>
						tel 076-185130.
					</Text>
				</View>

			</View>
		);
	}
}

Home.propTypes = propTypes;