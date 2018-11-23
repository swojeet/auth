import * as firebase from '@firebase/app';
import 'firebase/auth';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.default.initializeApp({
      apiKey: 'AIzaSyD15kGwvGv3vifv44x6G_RVVRCoTiprZNk',
      authDomain: 'auth-4bbbb.firebaseapp.com',
      databaseURL: 'https://auth-4bbbb.firebaseio.com',
      projectId: 'auth-4bbbb',
      storageBucket: 'auth-4bbbb.appspot.com',
      messagingSenderId: '552619958187'
    });

    firebase.default.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.default.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size='large' />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
