import React, { Component } from 'react';
import { View, Image, TouchableOpacity, TextInput, Text, FlatList, AsyncStorage , Alert} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import firebase from '../../../config/firebaseConfig.js';

import calculation from '../nutritionFunction/';
import close from '../../resources/img/closeBlack.png';
import Images from '../../Images/images.js';
import styles from './styles';

const propTypes = {
	navigation: PropTypes.object.isRequired,
	itemList: PropTypes.arrayOf(PropTypes.object).isRequired,
	date: PropTypes.string.isRequired,
};
export default class ListViewWithModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			checked: false,
			arrayItem: this.props.itemList,
			date: this.props.date,
			isModalVisible: false,
			selectedType: '',
			antal: 0
		};
	}



	_toggleModal(img, name, type) {
		
		this.setState({ 
			isModalVisible: !this.state.isModalVisible,
			selectedImage: img,
			selectedName: name,
			selectedType: type
		});
	}

	toggleModalfromRender = () => {
		this.setState({ 
			isModalVisible: !this.state.isModalVisible,
		});
	}

	toNutrition= () => {
		const{ date, antal } = this.state;

		this.setState({ 
			isModalVisible: !this.state.isModalVisible,
		});

		if(antal== 0) {
			alert('You have not added any amount');
		} else {
			Alert.alert('Artikel tillagd', `${this.state.antal} ${this.state.selectedType} ${this.state.selectedName}` );
			AsyncStorage.getItem('userToken').then(userToken => {
				var previousFibrer = -1;
				var previousOlöslig = -1;
				var previousLöslig = -1;
				firebase
					.database()
					.ref(`user/${userToken}/${date}/foodItem`)
					.push({
						name: this.state.selectedName,
						amount: this.state.antal,
						measureType: this.state.selectedType
					});
				firebase
					.database()
					.ref(`user/${userToken}/${date}/totalNutrition`)
					.once('value', snapshot => {
						if(snapshot.val()) {
							previousFibrer= snapshot.val().Fibrer;
							previousOlöslig = snapshot.val().Olöslig;
							previousLöslig = snapshot.val().Löslig;
						}
						
					}).then(() => {
						const arrayOfNutrition = calculation(this.state.selectedName, this.state.antal);
					
						if(previousFibrer >= 0 ) {
						//	alert('hello')
							firebase

								.database()
								.ref(`user/${userToken}/${date}/totalNutrition`)
								.update({
									Fibrer: arrayOfNutrition[0] + previousFibrer,
									Olöslig: arrayOfNutrition[1] + previousOlöslig,
									Löslig: arrayOfNutrition[2] + previousLöslig
								});
						} else {
						//	alert('hi')
							firebase
								.database()
								.ref(`user/${userToken}/${date}/totalNutrition`)
								.set({
									Fibrer: arrayOfNutrition[0],
									Olöslig: arrayOfNutrition[1],
									Löslig: arrayOfNutrition[2] 
								});
						}
						
					});
						
			
			});
			this.props.navigation.navigate('FoodSections', {date} );
		}

	
		
	}
	
	
	renderItem(name, img, type) {
		const {
			imageButon,
			imageSyle,
			imageButtonText,
		
		} = styles;
		
		return(
			<View>
				<TouchableOpacity style={imageButon} onPress={() => this._toggleModal(img, name, type)}>
					<Image source={Images[img]} style={imageSyle}/>
					<Text style={imageButtonText}>
						{name}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}

	render() {

		const {
			modalTitle,
			modalImage,
			modalText,
			antalInputView,
			modalButton,
			modalView,
			modalInputStyle,
			modalButtonText,
			modalContainer,
			modalBackButtonStyle,
			modalBackIcon,
			dateText
		} = styles;
		//alert(this.props.itemList)
		return (
			<View>
				<FlatList
					contentContainerStyle={{  margin: 20, alignItem: 'center'}}
					data={this.props.itemList}
					keyExtractor={item => item.name}
					numColumns={2}
					renderItem={itemObj => this.renderItem(itemObj.item.name, itemObj.item.img, itemObj.item.measureType)}
				/>
			
				<Modal isVisible={this.state.isModalVisible}>
					<View style={modalContainer}>
						<TouchableOpacity style={modalBackButtonStyle} onPress={this.toggleModalfromRender}>
							<Image source={close} style={modalBackIcon}/>
						</TouchableOpacity>
						<View style={modalView}>
							<Text style={modalTitle}>
								{this.state.selectedName}
							</Text>

							<Image source={Images[this.state.selectedImage]} style={modalImage}/>

							<Text style={modalText}>
								{this.state.selectedType}
							</Text>
							<View style={antalInputView}>
								<TextInput
									style={modalInputStyle}
									keyboardType= {'numeric'}
									placeholderTextColor={'#333333'}
									selectionColor={'#333333'}
									maxLength={6}
									underlineColorAndroid={'transparent'}
									onChangeText={antal => this.setState({ antal })}
								/>
							</View>
							<Text style={dateText}>{this.props.date}</Text>
							<TouchableOpacity onPress={this.toNutrition} style={modalButton} >
								<Text style={modalButtonText} >Lägg till</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</View>
			
				
		);
	}
}
ListViewWithModal.propTypes = propTypes;

