import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	logo: {
		marginTop: 20,
		height: 40,
		width: 132
	},
	upperText: {
		marginTop: 20,
		marginBottom: 20,
		color: 'black',
		lineHeight: 25,
		fontFamily: 'Avenir-Medium',
		fontWeight: '400',
		fontSize: 18,
	},
	downText:{
		color: '#0097a7',
		lineHeight: 25,
		fontFamily: 'Avenir',
		fontWeight: '300',
		fontSize: 15,
	},
	buttonStyle: {
		marginBottom: 20,
		height: 50,
		width: 280,
		backgroundColor: '#0197a7',
		borderRadius: 5,
		flexDirection:'row',
		alignItems: 'center'
	},
	buttonIcon: {
		marginLeft: 8,
		marginRight: 8
	},
	buttonText: {
		fontFamily: 'Avenir-Medium',
		fontSize: 15,
		fontWeight: '500',
		color: 'white',

	},
	buttonArrow: {
		position: 'absolute',
		right: 10
	}

});
export default styles;
