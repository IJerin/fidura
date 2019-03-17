import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, AsyncStorage, Alert } from 'react-native';
import firebase from '../../../config/firebaseConfig.js';
import PropTypes from 'prop-types';

import Button from '../../Components/Button/';
import Logo from '../../resources/img/logo.png';
import Arrow from '../../resources/img/Shape.png';

import CheckBox from '../../Components/CheckBox/';
import styles from './styles';

const propTypes = {
	navigation: PropTypes.object.isRequired,
};


export default class Gaser extends Component {
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

		Alert.alert('Gas Registrerat', `${items}`);
		AsyncStorage.getItem('userToken').then(userToken => {
			firebase
				.database()
				.ref(`user/${userToken}/${today}/Gaser`)
				.push({
					name: selectedItem,
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
				<Text style={questionText}>Hur besvärande upplever du att dina gaser har varit den här veckan?</Text>
    				<CheckBox
					title={'Inget besvärande'}
					checked={this.state.checked}
					onChangeState={this.onChangeState}
				/>
				<CheckBox
					title={'Lite besvärande'}
					checked={this.state.checked}
					onChangeState={this.onChangeState}
				/>
				<CheckBox
					title={'Måttligt besvärande'}
					checked={this.state.checked}
					onChangeState={this.onChangeState}
				/>
				<CheckBox
					title={'Mycket besvärande'}
					checked={this.state.checked}
					onChangeState={this.onChangeState}
				/>
				
				<TouchableOpacity style={buttonStyle} onPress={this.KlarPressed}>
    					<Button title={'Klar'} width={80} />
    				</TouchableOpacity>
    		</View>
    	);
	}
}
Gaser.propTypes = propTypes;

