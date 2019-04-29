import React, { Component } from 'react'

import firebase from 'react-native-firebase';

import { Navigator, Login } from '@ui/navigator'

export default class App extends Component {

  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {    
    if (!this.state.user) {
      return <Login />
    }

    return (
      <Navigator />
    )
  }
}