import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import firebase from '../../../config/firebaseConfig.js';

import ListView from '../ListViewWithModal';


const propTypes = {
	navigation: PropTypes.object.isRequired,
	search: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};


export default class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search: this.props.search,
			arrayOfFoodItem: [],
			path: 'food/',
			isReady: false
		};
	}
    
	UNSAFE_componentWillMount() {
		this.searchFunction();
	}
	searchFunction = () => {
		const { path, search } = this.state;
		let tempArray= [];
		var searchUpperCase = search.toUpperCase();
		//	
		var replaceLetters=(str) =>{
			str = str.replace('Ü', 'U');
			str = str.replace('Ö', 'O');
			str = str.replace('Å', 'A');
			str = str.replace('Ä', 'A');
			return str;
		};
		searchUpperCase = replaceLetters(searchUpperCase);
        
		var recursiveSearch=(object) =>{
			Object.keys(object).forEach(function(k){
				if(object[k].img){
					var key = k.toUpperCase();
					key = replaceLetters(key);
					if(key.includes(searchUpperCase)) {
						var item = {};
						item.name = k,
						item.img = object[k].img,
						item.measureType = object[k].measureType,
						tempArray.push(item);
					}
				}else{
					recursiveSearch(object[k]);
				}
			});
		};
        
		firebase
			.database()
			.ref(path)
			.once('value', snapshot => {
				if(tempArray.length > 0){
					this.searchFunction();
				}
				snapshot.forEach(data => {
					//alert(data.val())
					recursiveSearch(data.val());
					
			
				});
				this.setState({
					path: path,
					arrayOfFoodItem: tempArray
				}, () => {
				});
			});
	}

	
	render() {
		if(this.state.arrayOfFoodItem) {
			return (	
				<ScrollView>
					<ListView
						itemList= {this.state.arrayOfFoodItem}
						date={this.props.date}
						navigation= {this.props.navigation}
					/>
				</ScrollView>
			);
		}
		
	
	}
}	


Search.propTypes = propTypes;		