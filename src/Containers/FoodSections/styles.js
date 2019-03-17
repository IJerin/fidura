import { Platform, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
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
		top: 10,
		left: 10,
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		width: 40,
	},
		
	searchBar: {
		position: 'absolute', 
		backgroundColor:'white', 
		top: 85,
		left: 20,
		borderRadius: 5, 
		height: 50, 
		width: screenWidth - 40,
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
	pictureRow: {
		flexDirection: 'row'
	},
	imageStyle: {
		width: screenWidth/2,
		height: screenHeight/5
	},

	foodNameContainer: {
		position: 'absolute',
		left: 14,
		bottom: 14,
		paddingHorizontal: 5,
		borderRadius: 5,
		backgroundColor: 'rgba(0,0,0,.5)',
	},
	foodNameText: {
		fontFamily:'Avenir-Heavy',
		color: 'white',
		fontSize: 15,
		fontWeight: '800',
	},
	mittContainer: {
		alignItems: 'center',
		marginTop: 20,
	},
	mittText: {
		marginTop: 20,
		fontFamily:'Avenir-Heavy',
		color: 'black',
		fontSize: 15,
		fontWeight: '800',
		marginBottom: 5,
	}

});
export default styles;
