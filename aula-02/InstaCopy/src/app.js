import React, { Component } from "react";
import { Platform, Dimensions, View, ScrollView, Text, TextInput, StyleSheet, Image } from "react-native";

import api from "./api/feed.json";

const dime = Dimensions.get('window');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Search',
    };
  }

  renderPost = (post, key) => (
    <View key={key} style={styles.viewDirect}>
      
      <View style={styles.headerPost}>
        <Image
          style={styles.fotoPerfil}
          source={{uri: post.perfil}}/>
        
        <View style={{justifyContent: 'center', flex: 2}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{post.autor}</Text>
          {
            post.local ? <Text style={{fontSize: 15}}>{post.local}</Text> : null
          }

        </View>

        <View style={{justifyContent: 'center', alignItems: 'flex-end', marginRight: 10}}>
        <Image
            style={{width: 30, height: 30}} 
            source={ require('./img/camera.png')}/>
        </View>
      </View>
    
    </View>
  )

  render() {
    return (      
        
        <View style={{alignItems: 'center', flex: 1}}>
          
          <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
            
            <View style={{flex: 1, height: 40, alignItems: 'center'}}>
              <Image 
                style={{flex: 1, width: 15, height: 15, resizeMode: 'contain'}}
                source={require('./img/shape.png')}
              />
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center', flex: 4, width: 100, height: 40}}>
              <Text 
                style={{fontSize: 25}}>
                Direct
              </Text>
            </View>

            <View style={{flex: 1, height: 40, alignItems: 'center'}}>
              <Image 
                style={{flex: 1, width: 30, height: 30, resizeMode: 'contain'}}
                source={require('./img/send.png')}
              />
            </View>

          </View>

          <ScrollView 
            style={styles.container}
            contentContainerStyle={Platform.OS === 'ios' ? 20 : 0}>

            <View style={{flexDirection: 'row'}}>
              <TextInput style={{flex: 1, backgroundColor: '#FAFAFA', borderRadius: 15, margin: 7}}
                inlineImageLeft='search'
                value={this.state.text}
              />
            </View>          
          
            {
              api.feed.map(this.renderPost)
            }

          </ScrollView>


          <View style={{flexDirection: 'row'}}>
            
            <View style={{flex: 1, height: 60, alignItems: 'center', flexDirection: 'row'}}>


              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Image 
                  style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 8}}
                  source={require('./img/camera.png')}
                />
              </View>

              <View style={{flex: 1}}>
                <Text 
                  style={{fontSize: 20}}>
                  Camera
                </Text>
              </View>


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
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 10
  },
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewDirect: {
    width: dime.width,
    marginBottom: 5
  },
  footerPost: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 15
  }
});
