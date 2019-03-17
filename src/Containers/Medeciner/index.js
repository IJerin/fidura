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


export default class Medeciner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			selectedItem: [],
			annat: 0,
			annatChecked: false,
		};
	}



	toHome = () => {
		this.props.navigation.navigate('Home');
	}
	
	onChangeState = (val, title) => {
		
		if(val == false ) {
			var tempArray = this.state.selectedItem;
			tempArray = tempArray.filter(res => res !== title);
			this.setState({
				selectedItem: tempArray,
				checked: val,
				annatChecked: false
			});
		} else {
			if(!(title == 'Annat')) {
				this.state.selectedItem.push(title);
			} else {
				this.setState({annatChecked: true})
			}
			
			this.setState({
				checked: val
			});
		}
	}
	radioFunc = (val) => {
		this.setState({
			annat: val
		});
	}


	KlarPressed = () => {
		const { selectedItem, annat } = this.state;
		var date = new Date().getDate(); //Current Date
		var month = new Date().getMonth() + 1; //Current Month
		var year = new Date().getFullYear();
		const today = date+ '-' + month + '-' + year;
		var items = '';
		for (var i = 0; i < selectedItem.length; i++ ) {
			items = items + selectedItem[i] + ' ';
		}
		if(this.state.annatChecked) {
			Alert.alert('Medeciner', `Annat: ${annat}, ${items}`);
			AsyncStorage.getItem('userToken').then(userToken => {
				firebase
					.database()
					.ref(`user/${userToken}/${today}/Medeciner`)
					.push({
						name: selectedItem,
						Annat: annat
					});
			});
		} else {
			Alert.alert('Medeciner', `${items}`);
			AsyncStorage.getItem('userToken').then(userToken => {
				firebase
					.database()
					.ref(`user/${userToken}/${today}/Medeciner`)
					.push({
						name: selectedItem,
					});
			});
			this.toHome();
		}
		this.toHome();
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
    				<TouchableOpacity style={backButtonStyle} onPress={this.toHome}>
    					<Image source={Arrow}  />
    				</TouchableOpacity>

    				<View style={fiduraLogoStyleView}>
    					<Image source={Logo} style={fiduraIcon} />
    				</View>

    			</View>
				<ScrollView style={{marginBottom: 20 }}>
					<Text style={questionText}>Vilka gas- och tarmreglerande medel (stoppande eller laxerande) har du tagit den här veckan?</Text>
    				<CheckBox
						title={'Jag har inte tagit gas- och tarmreglerande medel den här veckan'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Dimetikon Meda'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Miniform'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Dimor'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Loperamid'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Imodium'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Vi-Siblin'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Lunelax'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Inolaxol'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Cilaxoral'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'(Movicol)'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Annat'}
						radioButton
						checked={this.state.checked}
						onChangeState={this.onChangeState}
						radioFunc={this.radioFunc}
					/>


					<Text style={questionText}>Hur mycket gas- och tarmreglerande medel (förstoppande, laxerande) har du ungefärligt tagit denna vecka?</Text>
    				
					<CheckBox
						title={'1-14 st (ca 1-2 st/dag)'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'15-28 st (ca 2-4 st/dag)'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'29-42 st (ca 2-4 st/dag)'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<CheckBox
						title={'Över 43 st (mer än 6 st/dag)'}
						checked={this.state.checked}
						onChangeState={this.onChangeState}
					/>
					<TouchableOpacity style={buttonStyle} onPress={this.KlarPressed}>
    					<Button title={'Klar'} width={80} />
    				</TouchableOpacity>
				</ScrollView>
    		</View>
    	);
	}
}
Medeciner.propTypes = propTypes;

