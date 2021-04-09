import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1WpLzmLP1-HWulpHq1t3uIkHBx7ZC1Kw",
    authDomain: "albums-project-react.firebaseapp.com",
    projectId: "albums-project-react",
    storageBucket: "albums-project-react.appspot.com",
    messagingSenderId: "903218824496",
    appId: "1:903218824496:web:74ec6f4f02e61cccc6b4f5"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();