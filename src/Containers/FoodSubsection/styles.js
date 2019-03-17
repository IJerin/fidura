import { Platform, StyleSheet, Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;

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
	buttonContainer: {
		marginBottom: 20,
	},
	titleText: {
		marginLeft: 40,
		width: 260,
		fontFamily: 'Avenir-Book',
		fontSize: 25,
		fontWeight: '400',
		marginBottom: 20
	},

});
export default styles;
