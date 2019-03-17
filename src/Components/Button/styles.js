import { Platform, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

	buttonTextBlue: {
		color: 'white',
		fontFamily: 'Avenir Next',
		fontWeight: '800',
		fontSize: 15,
	},
	buttonContainerBlue: {
		paddingVertical: 10,
		borderRadius: 5,
		backgroundColor: '#00bcd4',
		alignItems: 'center'
	},
	buttonTextWhite: {
		color: 'black',
		fontFamily: 'Avenir-Medium',
		fontWeight: '600',
		fontSize: 18,
		width: '80%',
		marginLeft: 20,
		textAlign:'center',
	},
	buttonContainerWhite: {
		marginHorizontal: 20,
		marginVertical: 10,
		flexDirection: 'row',
		paddingVertical: 15,
		width: screenWidth - 40,
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
	arrowStyle: {
		height: 25,
		width: 25
	},

});
export default styles;
