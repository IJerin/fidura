import React, { Component } from 'react';
import {  View, Text, Image } from 'react-native';

import PropTypes from 'prop-types';
import leftArrow from '../../resources/img/arrow.png';
import styles from './styles';



const propTypes = {
	title: PropTypes.string.isRequired,
	arrowImage: PropTypes.bool,
	width: PropTypes.number
};
const defaultProps = {
	arrowImage: false,
	width: 266
};
  

export default class Button extends Component {


	ifImage() {
		const { arrowImage, title, width  } = this.props;
		const {
			buttonContainerBlue,
			buttonContainerWhite,
			buttonTextBlue,
			buttonTextWhite,
			arrowStyle,

		} = styles;
		if(arrowImage) {
			return (
				<View style={buttonContainerWhite} >
					<Text style={buttonTextWhite}>{title}</Text>
					<Image style={arrowStyle} source={leftArrow} />
				</View>
	
			);
		}

		 else {
			return (
				<View style={[buttonContainerBlue, { width }]} >
					<Text style={buttonTextBlue}>{title}</Text>
				</View>
	
			);
		}
	
	}
	
	render() {

		return (
			<View>
				{this.ifImage()}
			</View>
		);


	}
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;