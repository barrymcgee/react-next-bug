import Rebase from 're-base';
import firebase from 'firebase';

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyAdKBFVlt6sXKjdryBLxLHQzE6fJ8bar0s',
    authDomain: 'irishart-95416.firebaseapp.com',
    databaseURL: 'https://irishart-95416.firebaseio.com',
    projectId: 'irishart-95416',
    storageBucket: 'irishart-95416.appspot.com',
    messagingSenderId: '528339703895'
  };
  var app = firebase.initializeApp(config);
  var base = Rebase.createClass(app.database());
}

export default base;
