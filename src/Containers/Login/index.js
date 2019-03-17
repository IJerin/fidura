import React, { Component } from 'react';
import { View, Image, TouchableOpacity, TextInput, Text, AsyncStorage } from 'react-native';
import firebase from '../../../config/firebaseConfig.js';
import moment from 'moment';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import Button from '../../Components/Button/';
import Logo from '../../resources/img/logo.png';
import CheckedIcon from '../../resources/img/checkBoxCheked.png';
import styles from './styles';
const propTypes = {
	navigation: PropTypes.object.isRequired,
};

// const highestTimeoutId = setTimeout(() => ';');
// for (let i = 0; i < highestTimeoutId; i++) {
// 	clearTimeout(i); 
// }
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			uid: null,
			checked: false,
			modalVisible: false,
		};
	}

	UNSAFE_componentWillMount() {
		AsyncStorage.getItem('userToken').then(userToken => {
			if(userToken !== null) {
				this.props.navigation.navigate('Home');
			}
		});
	}


    toHome = () => {
    
    	const { username, password, } = this.state;
    	let flag = false;
    	firebase.auth().signInWithEmailAndPassword(username, password)
    		.then((response) => {
    			this.setState({ uid: response.user.uid }, () => {
    				AsyncStorage.setItem('userToken', response.user.uid);
    				firebase.database().ref('user/'+response.user.uid+'/')
    					.once('value', user => {
    						user.forEach(data => {
    							if(data.key === 'firstLogIn') {
    								flag = true;
    								this.props.navigation.navigate('Home');
    							}
    						});
    						if(!flag) {
    							this.toggleModal();
    						}
    					}).catch((error) => {
    						alert(error);
    					});
							
    			});
					
    		})
    		.catch((error) => {
    			alert(error);
    		});
			
    }
		
		toggleModal = () => {
			this.setState({ modalVisible: !this.state.modalVisible});
		}
		modalButtonPressed = () => {
			const { uid } = this.state;
			this.setState({ modalVisible: !this.state.modalVisible});
			if(this.state.checked) {
				firebase
					.database()
					.ref('user/'+uid+'/firstLogIn')
					.set(true);
				this.props.navigation.navigate('Home');
			} else {
				alert('You have to check to proceed');
			}
		
		}
		check = () => {
			this.setState({ checked: !this.state.checked});
		}
		render() {
    	const {
    		container,
    		logo,
    		inputStyle,
    		inputContainer,
    		buttonContainer,
				checkImage,
				checkedText,
				modalView,
    		modalButton,
    		modalText,

    	} = styles;
			const { checked, modalVisible } = this.state;
    	return (
    		<View style={container}>
    			<Image source={Logo} style={logo}/>
    			<View style={inputContainer}>
    				<TextInput
    					style={inputStyle}
    					placeholder={'Login'}
    					placeholderTextColor={'black'}
    					selectionColor={'#1bb1ff'}
    					underlineColorAndroid={'transparent'}
    					onChangeText={username => this.setState({ username })}
    				/>
    				<TextInput
    					style={inputStyle}
    					placeholder={'Lösenord'}
    					placeholderTextColor={'black'}
    					selectionColor={'#1bb1ff'}
    					underlineColorAndroid={'transparent'}
    					onChangeText={password => this.setState({ password })}
    					secureTextEntry
    				/>
    			</View>

  			<Modal isVisible={modalVisible} >
						<View style={modalView}>
							<View style={{flexDirection: 'row', padding: 20 }}>
								<TouchableOpacity onPress={this.check} style={{marginTop: 5, marginRight: 10}}>
									{
										(!checked)
											?<View style={{ height: 15, width: 15,  backgroundColor: '#ededed', }}>
											</View>
											: <Image style={checkImage} source={CheckedIcon}/>
									}
								</TouchableOpacity>
							
								<Text style={checkedText}>
								Jag har fått muntlig och skriftlig information om Fidura-studien
								</Text>
							</View>

							<View style={modalButton}>
								<TouchableOpacity onPress={this.modalButtonPressed} >
									<Text style={modalText}>
										OK
									</Text>
								</TouchableOpacity>
							</View>
						</View>
    			</Modal>
    		

    			<TouchableOpacity style={buttonContainer} onPress={this.toHome}>
    				<Button title={'Login'} />
    			</TouchableOpacity>
    		</View>
    	);
		}
}
Login.propTypes = propTypes;

