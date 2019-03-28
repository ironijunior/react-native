import React, { Component } from "react";
import { Platform, StatusBar, View, ScrollView, Text, StyleSheet, Image } from "react-native";

import { IgIcon } from '@ui/components/IgIcon/'

import api from "@api/feed.json";

import styles from './feed.style'

import { BaseScreen } from '@ui/screens/base'

import { StorageService } from '@service/storage'

import { StorySection } from './section/stories'

export class FeedScreen extends BaseScreen {

  constructor(props) {
    super(props)

    this.state = {
      posts: api.feed
    }
  }

  screenWillFocus() {
    StatusBar.setTranslucent(true)

    StorageService.getObject('photo-camera').then(resp => {
      if(!!resp) {
        this.setState({
          posts: [...this.state.posts, { imagem: resp } ]
        })
      }
    })

    StorageService.remove('photo-camera')
  }

  renderPost = (post, key) => (
    <View key={key}>

      <View style={styles.headerPost}>
        <Image
          style={styles.fotoPerfil}
          source={{ uri: post.perfil }} />

        <View style={{ justifyContent: 'center', flex: 2 }}>
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>{post.autor}</Text>
          {
            post.local ? <Text>{post.local}</Text> : null
          }

        </View>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginRight: 10 }}>
          <IgIcon
            style={{ fontSize: 15, color: 'black' }}
            name='dots' />
        </View>
      </View>



      <Image
        style={styles.imagePost}
        source={{ uri: post.imagem }} />



      <View style={styles.footerPost}>
        <IgIcon
          style={{ fontSize: 25, color: 'black', marginTop: 2, marginLeft: 10, marginRight: 10 }}
          name={post.liked ? 'heart-full' : 'heart-empty'} />

        <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Lato-Regular' }}>{post.curtidas} likes</Text>
      </View>
    </View>
  )

  renderContent() {
    return (

      <ScrollView
        style={styles.container}
        contentContainerStyle={Platform.OS === 'ios' ? 20 : 0}>

        <StorySection />


        {
          this.state.posts.map(this.renderPost)
        }

      </ScrollView>

    );
  }
}