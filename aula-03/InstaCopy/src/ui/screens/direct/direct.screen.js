import React, { Component, Fragment } from "react";
import { Platform, View, TouchableOpacity, ScrollView, Text, TextInput, Image, StatusBar } from "react-native";

import { NavigationActions, HeaderBackButton } from 'react-navigation'

import { IgIcon } from '@ui/components/IgIcon'

import api from "@api/direct.json";

import styles from './direct.stylesheet'

import { BaseScreen } from '@ui/screens/base'

import { CAMERA_ROUTES } from '@ui/navigator/routes/camera'

export class DirectScreen extends BaseScreen {

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title')

    return {
      title: title,
      headerLeft: <HeaderBackButton onPress={navigation.getParam('_onDismiss')} />,
      headerRight: <IgIcon name='plus' style={{color: 'black', fontSize: 24, paddingRight: 10}} />
    }
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      text: 'Search',
    };

    this._onDismiss = this._onDismiss.bind(this)
    this._goToCamera = this._goToCamera.bind(this)
  }

  _onDismiss() {
    //this.props.navigation.pop()

    const backAction = NavigationActions.back()
    this.props.navigation.dispatch(backAction)
  }

  componentDidMount() {
    super.componentDidMount()

    this.props.navigation.setParams({
      _onDismiss: this._onDismiss
    })
  }

  screenWillFocus() {
    StatusBar.setTranslucent(false)
  }
  
  _goToCamera() {
    this.props.navigation.navigate(CAMERA_ROUTES.CAMERA)
  }

  renderDirectList = (post, key) => (
    <View key={key} style={styles.viewDirect}>

      <View style={styles.headerPost}>

        <View style={{ width: 80, height: 80, margin: 10 }}>
          {
            post.perfil.length > 1
              ?
              <View style={{ width: 80, height: 80, position: 'relative', flexDirection: 'row' }}>
                <Image
                  style={{ width: 60, height: 60, borderRadius: 50 }}
                  source={{ uri: post.perfil[0] }} />
                <Image
                  style={{ width: 60, height: 60, borderRadius: 50, position: 'absolute', right: 0, bottom: 0, borderWidth: 3, borderColor: 'white' }}
                  source={{ uri: post.perfil[1] }} />
              </View>
              :
              <Image
                style={{ width: 80, height: 80, borderRadius: 50 }}
                source={{ uri: post.perfil[0] }} />
          }
          <View style={{ zIndex: 999, flexDirection: 'row-reverse', height: 22, bottom: 15 }}>
            <View style={{
              zIndex: 999,
              backgroundColor: 'green',
              width: 22,
              height: 22,
              borderRadius: 50, borderWidth: 3, borderColor: 'white'
            }}></View>
          </View>
        </View>

        <View style={{ justifyContent: 'center', flex: 2 }}>
          <Text style={{ fontSize: 18, color: 'black', fontFamily: 'Lato-Regular', fontWeight: 'bold' }}>{post.autor}</Text>
          {
            post.local ? <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Lato-Regular' }}>{post.local}</Text> : null
          }

        </View>

        <TouchableOpacity onPress={this._goToCamera} style={{ justifyContent: 'center', alignItems: 'flex-end', marginRight: 10 }}>
          <IgIcon name="photo-camera"
            style={{ fontSize: 30, color: 'black' }} />
        </TouchableOpacity>
      </View>

    </View>
  )

  _renderDirects = () => (
    <ScrollView
      style={styles.container}
      contentContainerStyle={Platform.OS === 'ios' ? 20 : 0}>

      { this._renderSearch() }

      {
        api.feed.map(this.renderDirectList)
      }

    </ScrollView>
  )

  _renderSearch = () => (
    <View style={{ flexDirection: 'row' }}>
      <TextInput style={{ flex: 1, color: 'black', fontSize: 16, fontFamily: 'Lato-Regular', backgroundColor: '#e8eaed', borderRadius: 15, margin: 10 }}
        inlineImageLeft='search'
        value={this.state.text}
        onChangeText={(text) => this.setState({ text })}
      />
    </View>
  )

  _renderDirectFooter = () => (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={this._goToCamera}
        style={{ flex: 1, height: 60, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <IgIcon name="photo-camera"
            style={{ fontSize: 35, color: '#3a8aec', marginRight: 8 }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{ color: '#3a8aec', fontFamily: 'Lato-Regular', fontSize: 20 }}>
            Camera
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )

  renderContent() {
    return (
      <Fragment>

        { this._renderDirects() }

        { this._renderDirectFooter() }

      </Fragment>
    );
  }
}