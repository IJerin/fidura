import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import firebase from '../../../config/firebaseConfig.js';
import PureChart from 'react-native-pure-chart';
import moment from 'moment';
import PropTypes from 'prop-types';


import Logo from '../../resources/img/logo.png';
import textIcon from '../../resources/img/textIcon.png';
import Arrow from '../../resources/img/Shape.png';
import styles from './styles';

const propTypes = {
	navigation: PropTypes.object.isRequired,
};


export default class Chart extends Component {
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
			sampleData : [],
			firstDate: '',
			lastDate: '',
			ifChartDataAvailable: false,
			numberOfDays: 10

		};
	}

	UNSAFE_componentWillMount() {
		
		this.calculateDay();
		
	}

	toLoad = () => {
		let { numberOfDays } = this.state;
		let TempNumberOfDays = numberOfDays + 4;
		this.setState({
			numberOfDays: TempNumberOfDays
		},  () => {
			this.calculateDay();
		});
	}
	calculateDay = () => {

		let { firstDate, lastDate, numberOfDays } = this.state;

		var tempFirsDtate = '';

		if(firstDate == '') {
			var day = new Date().getDate(); //Current Date
			var month = new Date().getMonth() + 1; //Current Month
			var year = new Date().getFullYear();
			tempFirsDtate = day+ '-' + month + '-' + year;
		} else {
			tempFirsDtate = lastDate;
		}

		var tempLastDate = moment().subtract('days', numberOfDays).format('DD-MM-YYYY');
		
		this.setState({
			firstDate: tempFirsDtate,
			lastDate: tempLastDate
		}, () => {
			this.fetchData();
		});
	}

	fetchData = () => {
		let { firstDate, lastDate } = this.state;
		
		let itemArray = [];
		var dates = [];
		AsyncStorage.getItem('userToken').then(userToken => {
			firebase
				.database()
				.ref(`user/${userToken}/`)
				.orderByKey()
				.startAt(lastDate)
				.endAt(firstDate)
				.once('value', snapshot => {
					snapshot.forEach(data => {
						if(data.val().totalNutrition) {
							dates.push(data.key);
							itemArray.push(data.val().totalNutrition);
						}
						
					});
				
				})
				.then(() => {
					var data1= [];
					var data2= [];
					var data3= [];
					for (var i = 0; i< itemArray.length; i++) {

						var dataTemp1 = {};
						dataTemp1.y = itemArray[i].Fibrer;
						dataTemp1.x = dates[i];
						data1 = data1.concat([dataTemp1]);

						var dataTemp2 = {};
						dataTemp2.y = itemArray[i].Olöslig;
						dataTemp2.x = dates[i];
						data2 = data2.concat([dataTemp2]);

						var dataTemp3 = {};
						dataTemp3.y = itemArray[i].Löslig;
						dataTemp3.x = dates[i];
						data3 = data3.concat([dataTemp3]);
					}
					if(data1 == null || data2 == null || data3 == null) {
						this.setState({
							ifChartDataAvailable: false
						});
					} else {
						this.setState({
							sampleData : [
								{
							  seriesName: 'series1',
							  data: data1,
							  color: '#297AB1'
								},
								{
							  seriesName: 'series2',
							  data: data2,
							  color: 'yellow'
								},
								{
									seriesName: 'series3',
									data: data3,
									color: 'pink'
							  }
						  ],
						  ifChartDataAvailable: true
						});
					}
				});
		});
	}

	

	toMittIntag = () => {
    	this.props.navigation.navigate('MittIntag');
	}
	toFoodSections = () => {
    	this.props.navigation.navigate('FoodSections');
	}
	

	render() {
    	const {
    		container,
    		headerStyle,
    		backButtonStyle,
    		textIconView,
    		fiduraLogoStyleView,
    		fiduraIcon,
			textIconStyle,
			graphView,
			buttonStyle,
			buttonText,
			chartVariableName,
			variableContainer
    	} = styles;
		//alert(JSON.stringify(this.state.sampleData));
    	return (
    		<View style={container}>
    			<View style={headerStyle}>
    				<TouchableOpacity style={backButtonStyle} onPress={this.toFoodSections}>
    					<Image source={Arrow}  />
    				</TouchableOpacity>

    				<View style={fiduraLogoStyleView}>
    					<Image source={Logo} style={fiduraIcon} />
    				</View>

    				<TouchableOpacity style={textIconView} onPress={this.toMittIntag}>
    					<Image source={textIcon} style={textIconStyle} />
    				</TouchableOpacity>
    			</View>
				<View style={graphView}>
					{(this.state.ifChartDataAvailable)
						?<PureChart data={this.state.sampleData} type='line' height={300}/>
						: <View>
							<Text>
						No data available
							</Text>
						</View>
					}
    		 	{/*  */}
			 </View>
			 <View style={variableContainer}>
					<View style={{height: 15, width: 15, marginRight: 4, backgroundColor: '#297AB1'}}>
					</View>
					<Text syle={chartVariableName}>Fibrer</Text>
					<View style={{height: 15, width: 15,marginRight: 4,marginLeft: 15, backgroundColor: 'yellow'}}>
					</View>
					<Text syle={chartVariableName}>Olöslig</Text>
					<View style={{height: 15, width: 15,marginRight: 4,marginLeft: 15,  backgroundColor: 'pink'}}>
					</View>
					<Text syle={chartVariableName}>Löslig</Text>
				</View>
			 <View style={{alignItems: 'center'}}>
					<TouchableOpacity style={buttonStyle} onPress={this.toLoad}>
						<Text style={buttonText} >Load more</Text>
					</TouchableOpacity>
				</View>
			
    		</View>
    	);
	}
}
Chart.propTypes = propTypes;

