import React, { Component } from "react";
import { Platform, Dimensions, View, ScrollView, Text, StyleSheet, Image } from "react-native";

import { MainFeed } from './screens/main-feed/main-feed.screen'
import { Direct } from './screens/direct/direct.screen'

export class App extends Component {

  render() {
    return (
      
      <MainFeed />

    );
  }
}
