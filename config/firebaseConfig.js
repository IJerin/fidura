import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyD6mTW47R8FtZ9ZFSXS-aS0lAY-Hn6_Abs',
	authDomain: 'fiduraapp.firebaseapp.com',
	databaseURL: 'https://fiduraapp.firebaseio.com',
	projectId: 'fiduraapp',
	storageBucket: 'fiduraapp.appspot.com',
	messagingSenderId: '415834695238'
};

firebase.initializeApp(config);

export default firebase;