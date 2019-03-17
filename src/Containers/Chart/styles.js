import {  StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	headerStyle: {
		flexDirection: 'row',
		marginTop: 30,
		height: 40,
		marginBottom: 30,
	},
	backButtonStyle: {
		width: '20%',
		paddingLeft: 20,
		justifyContent: 'center'
		
	},
	textIconView: {
		width: '20%',
		flexDirection: 'row-reverse',
		paddingLeft: 20,
		alignItems: 'center'
	},
	fiduraLogoStyleView: {
		alignItems: 'center',
		width: '60%',
	},
	fiduraIcon:{
		height: 35,
		width: 114
	},
	textIconStyle: {
		height: 25,
		width: 25
	},
	graphView: {
		marginLeft: 20,
		marginTop: 20,
		height: 400,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonStyle: {
		marginTop: 60,
		height: 40,
		width: 200,
		borderWidth: 2,
		borderColor: '#00bcd4',
		borderRadius: 10,
		justifyContent: 'center'
	},
	buttonText: {
		textAlign: 'center',
		fontFamily: 'Avenir-Book',
		fontSize: 16,
		fontWeight: '500',
	},
	variableContainer: { 
		flexDirection: 'row', 
		justifyContent: 'center', 
		marginTop: 10,
		alignItems: 'center'
	}

});
export default styles;
