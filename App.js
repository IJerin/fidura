import React, { Component } from 'react';
import { View,  ActivityIndicator, YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Font } from 'expo';

import Home from './src/Containers/Home';
import Login from './src/Containers/Login';
import FoodSections from './src/Containers/FoodSections';
import FoodSubsection from './src/Containers/FoodSubsection';
import MittIntag from './src/Containers/MittIntag';
import Medeciner from './src/Containers/Medeciner';
import Handelser from './src/Containers/Handelser';
import Gaser from './src/Containers/Gaser';
import Toalettbes from './src/Containers/Toalettbes';
import Lackage from './src/Containers/Lackage';
import Chart from './src/Containers/Chart';

import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer', 'Deprecation warning', 'Warning']);
const _console = _.clone(console);
console.warn = message => {
	if (message.indexOf('Setting a timer') <= -1) {
		_console.warn(message);
	}
};
const AppStackNavigator = createStackNavigator(
	{
		
		Login: { screen: Login },
		MittIntag: { screen: MittIntag },
		Toalettbes: { screen: Toalettbes },
		
		Gaser: { screen: Gaser },
		Lackage: { screen: Lackage },
		Handelser: { screen: Handelser },
		Medeciner: { screen: Medeciner },
		FoodSections: { screen: FoodSections },
		FoodSubsection:{ screen: FoodSubsection },
		Home: { screen: Home },
		Chart: { screen: Chart },
		
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false,
		}
	}
);

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends Component {
	state = {
		isReady: false,
	};
	
	UNSAFE_componentWillMount() {
		Font.loadAsync({
			Avenir: require('./src/resources/fonts/avenir.ttf'),
			'Avenir Next': require('./src/resources/fonts/avenir_next.ttf'),
			'Avenir-Book': require('./src/resources/fonts/Avenir-Book.ttf'),
			'Avenir-Heavy': require('./src/resources/fonts/avenir_85_heavy.ttf'),
			'Avenir-Medium': require('./src/resources/fonts/Avenir-Medium.ttf'),
		
		}).then(() => this.setState({
			isReady: true
		})
		);
		
	}

	render() {
		if(!this.state.isReady) {
			return (
				<View
					style={{
						flex: 1,
						backgroundColor: 'white',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<ActivityIndicator size="large" color="#1bb1ff" />
				</View>
			);
		}
		return <AppContainer/>;
	}
}
