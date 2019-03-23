import React, { Component } from "react";
import { AppRegistry, Platform, Dimensions, View, ScrollView, Text, StyleSheet, Image } from "react-native";

import { IgIcon } from '@ui/components/IgIcon/'

import api from "@api/feed.json";

import styles from './main-feed.stylesheet'

export class MainFeed extends Component {

  renderPost = (post, key) => (
    <View key={key}>
      
      <View style={styles.headerPost}>
        <Image
          style={styles.fotoPerfil}
          source={{uri: post.perfil}}/>
        
        <View style={{justifyContent: 'center', flex: 2}}>
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>{post.autor}</Text>
          {
            post.local ? <Text>{post.local}</Text> : null
          }

        </View>

        <View style={{justifyContent: 'center', alignItems: 'flex-end', marginRight: 10}}>
        <IgIcon
            style={{fontSize: 15, color: 'black'}} 
            name='dots'/>
        </View>
      </View>
      
      
      
      <Image
          style={styles.imagePost} 
          source={{uri: post.imagem}}/>

      
      
      <View style={styles.footerPost}>
        <IgIcon 
            style={{fontSize: 25, color: 'black', marginTop: 2, marginLeft: 10, marginRight: 10}} 
            name={ post.liked ? 'heart-full' : 'heart-empty' }/>

        <Text style={{fontSize: 16, color: 'black', fontFamily: 'Lato-Regular'}}>{post.curtidas} likes</Text>
      </View>
    </View>
  )

  render() {
    return (      
        
        <View style={{alignItems: 'center', flex: 1}}>
          
          <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
            
            <View style={{flex: 1, height: 50, justifyContent: 'center', alignItems: 'center'}}>
              <IgIcon name="photo-camera-empty" style={{color: 'black', fontSize: 35}} />
            </View>

            <View style={{flex: 4, height: 50, justifyContent: 'center', alignItems: 'center'}}>
              <IgIcon
                style={{fontSize: 40, color: 'black'}}
                name='instagram_lg_black'
              />
            </View>

            <View style={{flex: 1, height: 50, justifyContent: 'center', alignItems: 'center'}}>
              <IgIcon name="paper-plane" style={{color: 'black', fontSize: 35}} />
            </View>

          </View>

          <ScrollView 
            style={styles.container}
            contentContainerStyle={Platform.OS === 'ios' ? 20 : 0}>
          
            {
              api.feed.map(this.renderPost)
            }

          </ScrollView>


        </View>
        
        
    );
  }
}