import firebase from '@firebase/app';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD15kGwvGv3vifv44x6G_RVVRCoTiprZNk',
      authDomain: 'auth-4bbbb.firebaseapp.com',
      databaseURL: 'https://auth-4bbbb.firebaseio.com',
      projectId: 'auth-4bbbb',
      storageBucket: 'auth-4bbbb.appspot.com',
      messagingSenderId: '552619958187'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
