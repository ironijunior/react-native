import React, { Component } from "react";
import { Alert, TouchableHighlight , Platform, Dimensions, View, ScrollView, Text, StyleSheet, Image } from "react-native";

import api from "./api/feed.json";

const dime = Dimensions.get('window');

class App extends Component {

  renderPost = (post, key) => (
    <View key={key}>
      
      <View style={styles.headerPost}>
        <Image
          style={styles.fotoPerfil}
          source={{uri: post.perfil}}/>
        
        <View style={{justifyContent: 'center', flex: 2}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{post.autor}</Text>
          {
            post.local ? <Text>{post.local}</Text> : null
          }

        </View>

        <View style={{justifyContent: 'center', alignItems: 'flex-end', marginRight: 10}}>
        <Image
            style={{width: 15, height: 15}} 
            source={ require('./img/dots.png')}/>
        </View>
      </View>
      
      
      
      <Image
          style={styles.imagePost} 
          source={{uri: post.imagem}}/>

      
      
      <View style={styles.footerPost}>
        <Image
            style={{width: 25, height: 25, marginTop: 3, marginLeft: 10, marginRight: 10}} 
            source={ post.liked ? require('./img/like-full.png') : require('./img/like.png')}/>

        <Text style={{fontSize: 16}}>{post.curtidas} likes</Text>
      </View>
    </View>
  )

  render() {
    return (      
        
        <View style={{alignItems: 'center', flex: 1}}>
          
          <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
            
            <View style={{flex: 1, height: 50, alignItems: 'center'}}>
              <Image 
                style={{flex: 1, width: 30, height: 30, resizeMode: 'contain'}}
                source={require('./img/camera.png')}
              />
            </View>

            <Image 
              style={{flex: 4, width: 100, height: 50, resizeMode: 'contain'}}
              source={require('./img/instagram_logo.png')}
            />

            <View style={{flex: 1, height: 50, alignItems: 'center'}}>
              <Image 
                style={{flex: 1, width: 30, height: 30, resizeMode: 'contain'}}
                source={require('./img/send.png')}
              />
            </View>

          </View>

          <ScrollView 
            style={styles.container}
            contentContainerStyle={Platform.OS === 'ios' ? 20 : 0}>
          
            {
              api.feed.map(this.renderPost)
            }

          </ScrollView>


          <View style={{flexDirection: 'row'}}>
            
            <View style={{flex: 1, height: 40, alignItems: 'center'}}>
              <Image 
                style={{flex: 1, width: 30, height: 30, resizeMode: 'contain'}}
                source={require('./img/camera.png')}
              />
            </View>

            <View style={{flex: 1, height: 40, alignItems: 'center'}}>
              <Image 
                style={{flex: 1, width: 30, height: 30, resizeMode: 'contain'}}
                source={require('./img/send.png')}
              />
            </View>

            <View style={{flex: 1, height: 40, alignItems: 'center'}}>
              <Image 
                style={{flex: 1, width: 30, height: 30, resizeMode: 'contain'}}
                source={require('./img/camera.png')}
              />
            </View>

            <View style={{flex: 1, height: 40, alignItems: 'center'}}>
              <Image 
                style={{flex: 1, width: 30, height: 30, resizeMode: 'contain'}}
                source={require('./img/send.png')}
              />
            </View>

            <View style={{flex: 1, height: 40, alignItems: 'center'}}>
              <Image 
                style={{flex: 1, width: 30, height: 30, resizeMode: 'contain'}}
                source={require('./img/camera.png')}
              />
            </View>
            
          </View>

        </View>
        
        
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    //paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10
  },
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imagePost: {
    width: dime.width,
    height: dime.width, 
    marginBottom: 5
  },
  footerPost: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 15
  }
});
