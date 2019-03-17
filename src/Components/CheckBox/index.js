import React, { Component } from 'react';
import {  View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import CheckedIcon from '../../resources/img/checkBoxCheked.png';
import UnCheckedIcon from '../../resources/img/checkBoxUnCheked.png';
import ChekedRadioIcon from '../../resources/img/checkedRadio.png';
import UnChekedRadioIcon from '../../resources/img/UnchekedRadio.png';
import PropTypes from 'prop-types';
import styles from './styles';



const propTypes = {
	title: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChangeState: PropTypes.func.isRequired,
	radioButton: PropTypes.bool,
	radioFunc: PropTypes.func.isRequired,
};
const defaultProps = {
	radioButton: false,
	radioFunc: function(){}
};

export default class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked,
			annat: '',
		};
	}

	handlePress = () => {
		const { onChangeState, title,  } = this.props;
		let { checked } = this.state;
	
		checked = !checked;
		this.setState({ checked });
		
		onChangeState(checked, title);
	}

	handleAnnat = () => {
		const { radioFunc  } = this.props;
		let { annat } = this.state;
		radioFunc(annat);
	}
	
	render() {
		const {
			checkImage,
			titleText,
			button,
			buttonText,
			inputStyle
		} = styles;
		const { radioButton } = this.props;
		if(radioButton) {
			return (
				<View style={{ marginLeft: 15, marginTop: 10 }}>
					<View style={{flexDirection: 'row' }}>
						<TouchableOpacity onPress={this.handlePress} style={{ marginRight: 10}}>
							{
								(!this.state.checked)
									? <Image style={checkImage} source={UnChekedRadioIcon}/>
									: <Image style={checkImage} source={ChekedRadioIcon}/>
							}
						
						</TouchableOpacity>
						{
							(!this.state.checked)
								? <Text style={titleText}>{this.props.title}</Text>
								:<View style={{flexDirection: 'row', marginTop: -10 }} >
									<TextInput 
									    style={inputStyle}
										placeholder={this.props.title}
										placeholderTextColor={'rgba(0,0,0,.5)'}
										maxLength={6}
										keyboardType= {'numeric'}
										selectionColor={'#1bb1ff'}
										underlineColorAndroid={'transparent'}
										onChangeText={annat => this.props.radioFunc(annat)}/>
									{/* <TouchableOpacity style={button} onPress={this.handleAnnat}>
    									<Text style={buttonText}>Save</Text>
    								</TouchableOpacity> */}
								</View>
								
						}
					</View>
				</View>
			);
		}
		else	return (
			<View style={{ marginLeft: 15, marginTop: 10 }}>
				<View style={{flexDirection: 'row' }}>
    				<TouchableOpacity onPress={this.handlePress} style={{ marginRight: 10}}>
						{
							(!this.state.checked)
								?<Image style={checkImage} source={UnCheckedIcon}/>
								: <Image style={checkImage} source={CheckedIcon}/>
						}
					
					</TouchableOpacity>
					<Text style={titleText}>{this.props.title}</Text>
				</View>
			</View>
		);


	}
}

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;