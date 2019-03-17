import { Platform, StyleSheet, Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;
const imageButtonWidth = (screenWidth/2) - 40;

const styles = StyleSheet.create({
	container: {
		marginTop: 24,
		flex: 1,
		backgroundColor: 'white',
	},
	coverPhoto: {
		width: '100%',
	},
	backButtonStyle: {
		position: 'absolute',
		top: 20,
		left: 20,
	},
		
	searchBar: {
		backgroundColor:'white',
		marginLeft: 30,
		marginTop: -30, 
		borderRadius: 5, 
		height: 60, 
		width: screenWidth - 60,
		marginBottom: 30,
		flexDirection: 'row',
		alignItems:'center',
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.8,
				shadowRadius: 1,
			},
			android: {
				elevation: 5,
			},
		})
	},
	inputStyle: {
		//width: 266,
		width: '88%',
		paddingLeft: 15,
		fontFamily: 'Avenir-Book',
	},
	searchIconStyle: {
		height: 20,
		width: 20,
	},
	searchView: {
		width: '15%',
	},
	titleText: {
		marginLeft: 40,
		width: 260,
		fontFamily: 'Avenir-Book',
		fontSize: 25,
		fontWeight: '400',
		marginBottom: 20
	},
	imageButon: {
		marginVertical: 5,
		marginLeft: 10,
		marginRight: 10,
		paddingVertical: 10,
		paddingHorizontal: 5,
		width: imageButtonWidth,
		borderRadius: 5,
		alignItems:'center',
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.8,
				shadowRadius: 1,
			},
			android: {
				elevation: 5,
			},
		})
	},
	imageSyle: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30,
		width: imageButtonWidth - 60,
		height: (imageButtonWidth * 1.5) - 120
	},
	imageButtonText: {
		color: 'black',
		fontFamily: 'Avenir-Medium',
		fontWeight: '400',
		fontSize: 14,
		marginTop: 10,
		textAlign:'center',
	},
	modalContainer: {
		backgroundColor: 'white',
		borderRadius: 5
	},
	modalView: {
		alignItems: 'center',
	},
	modalBackIcon: {
		height: 18,
		width: 18
	},
	modalTitle: {
		color: '#0097a7',
		fontWeight: '400',
		fontSize: 20,
		marginTop: 5,
		textAlign:'center',
		marginLeft: 10,
		marginRight: 10
	},
	modalImage: {
		marginTop: 30,
		height: 180,
		width:	160,
		marginBottom: 15
	},
	modalText: {
		color: 'black',
		fontFamily: 'Avenir-Medium',
		fontSize: 18,
		textAlign:'center',
		marginLeft: 5,
		marginRight: 5
	},
	antalInputView: {
		backgroundColor:'white',
		paddingLeft: 10,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 5, 
		height: 50, 
		width: '80%',
		justifyContent: 'center',
		alignItems:'center',
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.8,
				shadowRadius: 1,
			},
			android: {
				elevation: 5,
			},
		})
	},
	modalInputStyle: {
		width: 260,
		fontFamily: 'Avenir-Book',
		fontSize: 16,
		fontWeight: '400',
		paddingLeft: 10
	},
	dateText: {
		color: 'black',
		fontFamily: 'Avenir-Medium',
		fontSize: 18,
		textAlign:'center',
		marginBottom: 30,

	},
	modalButton: {
		paddingTop: 18,
		paddingBottom: 18,
		borderTopWidth: 1,
		borderTopColor: 'rgba(1,151,167, 0.5)',
		width: '100%'
	},

	modalButtonText: {
		color: '#0097a7',
		fontFamily: 'Avenir Next',
		fontSize: 16,
		textAlign:'center',
	},
	modalBackButtonStyle: {
		marginTop: 20,
		marginLeft: 25
	}

});
export default styles;
