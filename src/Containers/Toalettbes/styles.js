import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		marginLeft: 20,
		//marginRight: 20
	},
	questionText: {
		marginTop: 20,
		marginBottom: 20,
		color: 'black',
		lineHeight: 35,
		fontFamily: 'Avenir-Medium',
		fontWeight: '400',
		fontSize: 18,
	},
	headerStyle: {
		flexDirection: 'row',
		marginTop: 30,
		height: 40,
	},
	backButtonStyle: {
		width: '20%',
		justifyContent: 'center'
		
	},
	fiduraLogoStyleView: {
		alignItems: 'center',
		width: '60%',
	},
	fiduraIcon:{
		height: 35,
		width: 114
	},
	buttonStyle: {
		marginTop: 20,
		marginLeft: 15
	},
	boxBody: {
		borderWidth: 1.5,
		borderRadius: 5, 
		borderColor: 'grey', 
		marginRight: 20, 
		marginBottom: 30,
		marginTop: 10
	},
	imageTextContainer: {
		alignItems: 'center',
		marginTop: 30}
});
export default styles;
