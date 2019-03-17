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
	},
	backButtonStyle: {
		width: '20%',
		paddingLeft: 20,
		justifyContent: 'center'
		
	},
	graphIconView: {
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
	graphIconStyle: {
		height: 25,
		width: 25
	},
	dateViewContainer: {
		flexDirection: 'row',
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 30,
		marginTop: 50,
	},
	dateText: {
		marginTop: 10,
		fontFamily: 'Avenir-Book',
		fontSize: 22,
		fontWeight: '400',
	},
	laggButton: {
		width: '40%',
		flexDirection: 'row-reverse'
	},
	modalContainer: {
		backgroundColor: 'white',
		borderRadius: 5,
		width: screenWidth - 60
	},
	modalTextView: {
		padding: 20
	},
	modalText: {
		textAlign: 'center',
		fontFamily: 'Avenir-Book',
		fontSize: 20,
		fontWeight: '400',
	},
	modalButtonContainer: {
		marginTop: 20,
		flexDirection: 'row',
		height: 50,
		alignItems: 'center',
		borderTopWidth: 1,
		borderTopColor: '#00bcd4'
	},
	bodyContainer: {
		height: screenHeight- 350,
	},
	foodDescriptionContainer: {
		flexDirection: 'row',
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 15,
		alignItems: 'center'
	},
	foodText: {
		width: '60%',
		fontFamily: 'Avenir-Book',
		fontSize: 16,
		fontWeight: '400',
	},
	TaBortButton: {
		width: '40%',
		flexDirection: 'row-reverse'
	},
	taBortText: {
		fontFamily: 'Avenir-Book',
		fontSize: 14,
		fontWeight: '400',
		color: 'white',
		backgroundColor: '#FF0000',
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderRadius: 5
	},
	messageBody: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	messageTextStyle: {
		fontFamily: 'Avenir-Book',
		fontSize: 18,
		fontWeight: '400',
		color: 'black',
	},
	bottomButtonContainer: {
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',

	},
	bottomButton: {
		flexDirection: 'row',
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderWidth: 2,
		borderColor: '#00bcd4',
		borderRadius: 10,
		alignItems: 'center',
		margin: screenWidth/10
	},
	bottomButtonText: {
		fontFamily: 'Avenir-Book',
		fontSize: 16,
		fontWeight: '500',
	}
});
export default styles;
