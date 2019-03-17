import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView,  } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../Components/Button/';
import Logo from '../../resources/img/logo.png';
import Arrow from '../../resources/img/Shape.png';
import styles from './styles';

const propTypes = {
	navigation: PropTypes.object.isRequired,
};


export default class Handelser extends Component {


	toHome = () => {
		this.props.navigation.navigate('Home');
	}

	toGaser = () => {
		this.props.navigation.navigate('Gaser');
	}

	toLackage = () => {
		this.props.navigation.navigate('Lackage');
	}

	toToalettbes = () => {
		this.props.navigation.navigate('Toalettbes');
	}
	


	render() {
    	const {
			container,
			headerStyle,
			backButtonStyle,
			fiduraLogoStyleView,
    		fiduraIcon,
			buttonStyle,
			buttonContainer
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
				<View style={buttonContainer}>
					<TouchableOpacity style={buttonStyle} onPress={this.toToalettbes}>
						<Button title={'Toalettbesök'} />
					</TouchableOpacity>
					<TouchableOpacity style={buttonStyle} onPress={this.toLackage}>
						<Button title={'Läckage'} />
					</TouchableOpacity>
					<TouchableOpacity style={buttonStyle} onPress={this.toGaser}>
						<Button title={'Gaser'} />
					</TouchableOpacity>
				</View>
    		</View>
    	);
	}
}
Handelser.propTypes = propTypes;

