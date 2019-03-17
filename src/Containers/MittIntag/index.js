import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text, AsyncStorage } from 'react-native';
import Modal from 'react-native-modal';
import firebase from '../../../config/firebaseConfig.js';



import PropTypes from 'prop-types';
import calculation from '../../Components/nutritionFunction/';
import Button from '../../Components/Button/';
import Logo from '../../resources/img/logo.png';
import GraphIcon from '../../resources/img/graphIcon.png';
import Arrow from '../../resources/img/Shape.png';
import LeftIcon from '../../resources/img/buttonLeftIcon.png';
import RightIcon from '../../resources/img/buttonRightIcon.png';
import styles from './styles';

const propTypes = {
	navigation: PropTypes.object.isRequired,
};


export default class MittIntag extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			itemArray: [],
			countAmount: [],
			message: '',
			day: 0,
			month: 0,
			year: 0,
			isLaModalVisible: false,
			isTaModalVisible: false,
			itemToRemoveString: '',
			itemToRemove: null,
			userToken: null,

		};
	}

	UNSAFE_componentWillMount() {
		
		var day = new Date().getDate(); //Current Date
		var month = new Date().getMonth() + 1; //Current Month
		var year = new Date().getFullYear();
		const date = day+ '-' + month + '-' + year;
		
		this.setState({
			date,
			day,
			month,
			year
		}, () => {
			this.fetchData();
		});
		
		
	}
	fetchData = () => {
		const { date } = this.state;
		let itemArray = [];
		AsyncStorage.getItem('userToken').then(userToken => {
			firebase
				.database()
				.ref(`user/${userToken}/${date}/foodItem/`)
				.once('value', snapshot => {
					snapshot.forEach(data => {
						if(snapshot.val()) {
							var item = {};
							item.key = data.key,
							item.name = data.val().name,
							item.amount = data.val().amount,
							itemArray = itemArray.concat([item]);
						}
					});
				
				})
				.then(() => {
					if(!(itemArray[0] == null)) {
						//alert(itemArray);
						this.setState({
							itemArray,
							date,
							message: '',
							userToken
						});
					} else {
						this.setState({
							message: 'You have not added anything on this day'
						});
					}
				});
		});
	}

	
	taBort = () => {
		this.closeTaModal();
		const { date, itemArray, itemToRemove  } = this.state;
		AsyncStorage.getItem('userToken').then(userToken => {
			var ref = 	firebase.database().ref(`user/${userToken}/${date}/foodItem`);
			ref.child(itemToRemove.key).remove();

			var previousFibrer = -1;
			var previousOlöslig = -1;
			var previousLöslig = -1;
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
					const arrayOfNutrition = calculation(itemToRemove.name, itemToRemove.amount);
					previousFibrer = previousFibrer - arrayOfNutrition[0];
					previousOlöslig = previousOlöslig - arrayOfNutrition[1];
					previousLöslig = previousLöslig - arrayOfNutrition[2];
					firebase
						.database()
						.ref(`user/${userToken}/${date}/totalNutrition`)
						.set({
							Fibrer: previousFibrer,
							Olöslig: previousOlöslig,
							Löslig: previousLöslig
						});
					
				});
					
		});

		
					
		var tempArray = itemArray;
		tempArray = tempArray.filter(res => res.key !== itemToRemove.key);
		if(tempArray.length == 0) {
			this.setState({ itemArray: tempArray, message: 'You have not added anything on this day' });
		} else {
			this.setState({ itemArray: tempArray, message: '' });
		}
		
		
	}



	nextDay = () => {
		this.calculateDay('add');
	}
	
	previousDay = () => {
		this.calculateDay('minus');
	}

	calculateDay(val) {
		const { day, month, year } = this.state;
		var newDay = day;
		var newMonth = month;
		var newYear = year;

		if(val == 'add') {
			var flag = false;
			if(newDay == 28 && newMonth == 2 ) {
				if((newYear % 4 == 0) && (newYear % 100 != 0) || (newYear % 400 == 0)) {
					newDay = 29;
					newMonth= newMonth + 1;
					flag = true;
				} else {
					newDay = 1,
					newMonth= newMonth + 1;
					flag = true;
				}
			}
			else if(newDay == 29 && newMonth == 2 ) {
				newDay = 1,
				newMonth= newMonth + 1;
				flag = true;
			}
			
			else if(newDay == 30 && (newMonth == 4 || newMonth == 6 || newMonth == 9 || newMonth ==11) ) {
				newDay = 1;
				newMonth = newMonth + 1;
				flag = true;
			}
			else if( newDay == 31 ) {
				if(newMonth == 12) {
					newMonth = 1;
					newYear = newYear + 1;
				}
				else {
					newMonth = newMonth + 1;
				}
				newDay = 1;
				
				flag = true;
			}
		
			if (flag == false) {
				newDay = newDay+ 1;
			}
		}
		if (val == 'minus') {
			var flagSub = false;
			if(newDay == 1 && newMonth == 3 ) {
				if((newYear % 4 == 0) && (newYear % 100 != 0) || (newYear % 400 == 0)) {
					newDay = 29;
					newMonth= newMonth - 1;
					flagSub = true;
				} else {
					newDay = 28,
					newMonth= newMonth - 1;
					flagSub = true;
				}
			}
			
			else if(newDay == 1 && (newMonth == 1 || newMonth == 2 ||newMonth == 4 || newMonth == 6 || newMonth == 9 || newMonth == 11  || newMonth == 8) ) {
				if(newMonth == 1) {
					newMonth = 12;
					newYear = newYear - 1;
				}
				else {
					newMonth = newMonth - 1;
				}
				newDay = 31;
				
				flagSub = true;
			}
			else if( newDay == 1 ) {
				newDay = 30;
				newMonth = newMonth - 1;
				flagSub = true;
			}
			if(newMonth == 13) {
				newYear = newYear - 1;
				newMonth = 12;
				flagSub = true;
			}
			if (flagSub == false) {
				newDay = newDay - 1;
			}
		}
		const date = newDay + '-' + newMonth + '-' + newYear;
		
		this.setState({
			day: newDay,
			month: newMonth,
			year: newYear,
			date
		}, () => {
			this.fetchData();
		});
		

	}
	modalView = (itemFlag) => {
		const {
			modalContainer,
			modalTextView,
			modalText,
			modalButtonContainer,
		} = styles;
		if(itemFlag) {
			return (
				<View style={modalContainer}>
					<View style={modalTextView}>
						<Text style={modalText}>
						Är du säker på att du vill ta bort {this.state.itemToRemoveString}? 

						</Text>
					</View>
					<View style={modalButtonContainer}>
						<TouchableOpacity style={{ width: '48%', justifyContent: 'center'}} onPress={this.taBort} >
							<Text style={modalText}>
							Ja
							</Text>
						</TouchableOpacity>
						<View style={{height: '100%', width: 2, backgroundColor: '#00bcd4'}}>
						</View>
						<TouchableOpacity style={{ width: '48%', justifyContent: 'center'}} onPress={this.closeTaModal}>
							<Text style={modalText}>
							Nej
							</Text>
						</TouchableOpacity>
					</View>
				</View>	
			)
		}
		else return (
			<View style={modalContainer}>
				<View style={modalTextView}>
					<Text style={modalText}>
					Do you like to add Item on this date: {this.state.date}?
					</Text>
				</View>
				<View style={modalButtonContainer}>
					<TouchableOpacity style={{ width: '48%', justifyContent: 'center'}}onPress={this.toAddFood} >
						<Text style={modalText}>
							Ja
						</Text>
					</TouchableOpacity>
					<View style={{height: '100%', width: 2, backgroundColor: '#00bcd4'}}>
					</View>
					<TouchableOpacity style={{ width: '48%', justifyContent: 'center'}} onPress={this.openLaModal}>
						<Text style={modalText}>
						  Nej
						</Text>
					</TouchableOpacity>
				</View>
			</View>	
		)
	}

	openLaModal = () => {
		this.setState({
			isLaModalVisible: !this.state.isLaModalVisible,
		});
	}

	openTaModal(itemToRemoveString, itemToRemove){
		
		this.setState({
			isTaModalVisible: !this.state.isTaModalVisible,
			itemToRemoveString,
			itemToRemove
		});
	}
	closeTaModal = () => {
		this.setState({
			isTaModalVisible: !this.state.isTaModalVisible,
		});
	}

	toAddFood = () => {
		this.setState({
			isLaModalVisible: !this.state.isLaModalVisible,
		});
		var date = this.state.date;
		this.props.navigation.navigate('FoodSections', {date: date});
	}
	toFoodSection = () => {
    	this.props.navigation.navigate('FoodSections');
	}
	toChart = () => {
		firebase.database().ref(`user/${this.state.userToken}/`)
			.once('value', snapshot => {
			//	alert(JSON.stringify(snapshot))
				if(snapshot.val() == null){
					alert('You have not added anything yet');
				} else {
					this.props.navigation.navigate('Chart');
				}
			});
    	
	}
	

	render() {
    	const {
    		container,
    		headerStyle,
    		backButtonStyle,
    		graphIconView,
    		fiduraLogoStyleView,
    		fiduraIcon,
    		graphIconStyle,
    		dateViewContainer,
    		dateText,
			laggButton,
    		bodyContainer,
    		foodDescriptionContainer,
    		foodText,
    		TaBortButton,
    		taBortText,
    		bottomButtonContainer,
    		bottomButton,
			bottomButtonText,
			messageBody,
			messageTextStyle
    	} = styles;
    	//	alert(this.state.data);
    	return (
    		<View style={container}>
    			<View style={headerStyle}>
    				<TouchableOpacity style={backButtonStyle} onPress={this.toFoodSection}>
    					<Image source={Arrow}  />
    				</TouchableOpacity>

    				<View style={fiduraLogoStyleView}>
    					<Image source={Logo} style={fiduraIcon} />
    				</View>

    				{/* <TouchableOpacity style={graphIconView} onPress={this.toChart}>
    					<Image source={GraphIcon} style={graphIconStyle} />
    				</TouchableOpacity> */}
    			</View>

    			<View style={dateViewContainer}>
    				<View style={{width: '60%' }}>
    					<Text style={dateText}>
							{this.state.date}
    					</Text>
    				</View>
    				<TouchableOpacity style={laggButton} onPress={this.openLaModal} >
    					<Button title={'Lägg till'} width={80} />
    				</TouchableOpacity>
    			</View>
			
				<Modal isVisible={this.state.isLaModalVisible}>
				{this.modalView(false)}
				</Modal>
    			<ScrollView >
								
    				<View style={bodyContainer} >
    					{
							(this.state.message)
								?	<View style={messageBody}>
									<Text style={messageTextStyle}>{this.state.message} </Text>
								</View>
							
							
								:	this.state.itemArray.map((val) => {
									
									const itemDetails = val.amount + ' ' + val.name;
    						return (
    							<View key={val.key} style={foodDescriptionContainer} >
    								<Text style={foodText}>
    									{itemDetails}
    								</Text>
    								<TouchableOpacity style={TaBortButton} onPress={() =>this.openTaModal(itemDetails, val)}>
    									<Text style={taBortText}>Ta bort </Text>
    								</TouchableOpacity>
									
    						</View>
    						);
    					
								})}
						
    					
    				</View>
    			</ScrollView>
				<Modal isVisible={this.state.isTaModalVisible}>
					{this.modalView('Ta')}
				</Modal>

    			<View style={bottomButtonContainer}>

    				<TouchableOpacity style={bottomButton} onPress={this.previousDay}>
    					<Image source={LeftIcon} />
    					<Text style={[bottomButtonText, {marginRight: 10}]}>Previous </Text>
    				</TouchableOpacity>

    				<TouchableOpacity style={bottomButton} onPress={this.nextDay}>
    					<Text style={[bottomButtonText, {marginLeft: 10}]}>Next </Text>
    					<Image source={RightIcon} />
    				</TouchableOpacity>

    			</View>

    		</View>
    	);
	}
}
MittIntag.propTypes = propTypes;

