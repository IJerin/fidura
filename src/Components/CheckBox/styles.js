import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({

	checkImage: {
		height: 25, 
		width: 25, 
	},
	titleText: {
		marginTop: -2,
		marginRight: 40,
		color: 'black',
		fontFamily: 'Avenir-Medium',
		fontWeight: '400',
		fontSize: 16,
	},
	button: {
		marginTop: 8,
		paddingVertical: 5,
		paddingHorizontal: 8,
		borderWidth: 2,
		borderColor: '#00bcd4',
		borderRadius: 10,
		alignItems: 'center',
	},
	buttonText: {
		fontFamily: 'Avenir-Book',
		fontSize: 14,
		fontWeight: '400',
	},
	inputStyle: {
		borderBottomColor: 'rgba(0,0,0,.8)',
		borderBottomWidth: 1,
		marginRight: 14
	}
});
export default styles;
