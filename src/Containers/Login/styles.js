import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center'
	},
	logo: {
		marginTop: 120,
		height: 52,
		width: 170
	},
	inputContainer: {
		marginTop: 60,
	},
	inputStyle: {
		borderBottomWidth: 1,
		borderColor: '#bbbbbb',
		height: 40,
		width: 266,
		marginTop: 10
	},
	buttonContainer: {
		marginTop: 80,
		
	},
	checkImage: {
		height: 18, 
		width: 15, 
	},
	checkedText: {
		fontSize: 16,
		lineHeight: 22,
		marginRight: 12
	},
	modalButton: {
		flex: 1,
		flexDirection: 'row-reverse'
	},
	modalText: {
		marginTop: 10,
		fontSize: 18,
		marginRight: 20,
	},
	modalView: {
		backgroundColor: 'white',
		borderRadius: 5,
		height: 140
	}
});
export default styles;
