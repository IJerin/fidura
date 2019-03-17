import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, AsyncStorage, Alert } from 'react-native';
import firebase from '../../../config/firebaseConfig.js';
import PropTypes from 'prop-types';

import Button from '../../Components/Button/';
import Logo from '../../resources/img/logo.png';
import Arrow from '../../resources/img/Shape.png';

import styles from './styles';

const propTypes = {
	navigation: PropTypes.object.isRequired,
};


export default class Lackage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			st: ''
		};
	}

	toHandelser= () => {
		this.props.navigation.navigate('Handelser');
	}



	KlarPressed = () => {
		var date = new Date().getDate(); //Current Date
		var month = new Date().getMonth() + 1; //Current Month
		var year = new Date().getFullYear();
		const today = date+ '-' + month + '-' + year;

		//alert(JSON.stringify(this.state.selectedItem));
		Alert.alert('Läckage Registrerat', `${JSON.stringify(this.state.st)}`);
		AsyncStorage.getItem('userToken').then(userToken => {
			firebase
				.database()
				.ref(`user/${userToken}/${today}/lackage`)
				.push({
					st: this.state.st
				});
		});
		this.props.navigation.navigate('Handelser');
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
				<Text style={questionText}>Ange antalet läckage du har haft den här veckan: </Text>
			
				<TextInput 
					style={{marginTop: 10, borderWidth: 1, borderColor: '#1bb1ff', width: 100, paddingLeft: 10}}
					placeholder={'st'}
					placeholderTextColor={'grey'}
					keyboardType= {'numeric'}
					selectionColor={'#1bb1ff'}
					underlineColorAndroid={'transparent'}
					onChangeText={st => this.setState({ st })}/>
					
					
				<TouchableOpacity style={buttonStyle} onPress={this.KlarPressed}>
    					<Button title={'Klar'} width={80} />
    			</TouchableOpacity>
    		</View>
    	);
	}
}
Lackage.propTypes = propTypes;

