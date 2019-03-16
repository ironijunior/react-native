import React, { Component } from "react";
import { Platform, View, ScrollView, Text, TextInput, Image } from "react-native";

import { IgIcon } from '../../components/IgIcon/ig-icon.component'

import api from "../../api/direct.json";

import styles from './direct.stylesheet'

export class Direct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Search',
    };
  }

  renderPost = (post, key) => (
    <View key={key} style={styles.viewDirect}>
      
      <View style={styles.headerPost}>


        <View style={{width: 80, height: 80, margin: 10}}>
          {
            post.perfil.length > 1 
                ?
                <View style={{width: 80, height: 80, position: 'relative', flexDirection: 'row'}}>
                  <Image
                    style={{width: 60, height: 60, borderRadius: 50}}
                    source={{uri: post.perfil[0]}}/>
                  <Image
                    style={{width: 60, height: 60, borderRadius: 50, position: 'absolute', right: 0, bottom: 0, borderWidth: 3, borderColor: 'white'}}
                    source={{uri: post.perfil[1]}}/>
                </View>
                :
                <Image
                  style={{width: 80, height: 80, borderRadius: 50}}
                  source={{uri: post.perfil[0]}}/>
          }
          <View style={{zIndex: 999, flexDirection: 'row-reverse', height: 22, bottom: 15}}>
            <View style={{
              zIndex: 999, 
              backgroundColor: 'green', 
              width: 22, 
              height: 22, 
              borderRadius: 50, borderWidth: 3, borderColor: 'white'}}></View>
          </View>
        </View>
        
        <View style={{justifyContent: 'center', flex: 2}}>
          <Text style={{fontSize: 18, color: 'black', fontFamily: 'Lato-Regular', fontWeight: 'bold'}}>{post.autor}</Text>
          {
            post.local ? <Text style={{fontSize: 15, color: 'black', fontFamily: 'Lato-Regular'}}>{post.local}</Text> : null
          }

        </View>

        <View style={{justifyContent: 'center', alignItems: 'flex-end', marginRight: 10}}>
        <IgIcon name="photo-camera"
            style={{fontSize: 30, color: 'black'}} />
        </View>
      </View>
    
    </View>
  )

  render() {
    return (      
        
        <View style={{alignItems: 'center', flex: 1}}>
          
          <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
            
            <View style={{flex: 1, height: 40, alignItems: 'center', justifyContent: 'center'}}>
              <IgIcon 
                name="left-arrow"
                style={{fontSize: 30, color: 'black'}}
              />
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center', flex: 4, width: 100, height: 40}}>
              <Text 
                style={{fontSize: 25, color: 'black', fontFamily: 'Lato-Regular'}}>
                Direct
              </Text>
            </View>

            <View style={{flex: 1, height: 40, justifyContent: 'center', alignItems: 'center'}}>
              <IgIcon
                style={{fontSize: 30, color: 'black'}}
                name='plus'
              />
            </View>

          </View>

          <ScrollView 
            style={styles.container}
            contentContainerStyle={Platform.OS === 'ios' ? 20 : 0}>

            <View style={{flexDirection: 'row'}}>
              <TextInput style={{flex: 1, color: 'black', fontSize: 16, fontFamily: 'Lato-Regular', backgroundColor: '#e8eaed', borderRadius: 15, margin: 10}}
                inlineImageLeft='search'
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
              />
            </View>          
          
            {
              api.feed.map(this.renderPost)
            }

          </ScrollView>


          <View style={{flexDirection: 'row'}}>
            
            <View style={{flex: 1, height: 60, alignItems: 'center', flexDirection: 'row'}}>


              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <IgIcon name="photo-camera" 
                  style={{fontSize: 35, color: '#3a8aec', marginRight: 8}}
                />
              </View>

              <View style={{flex: 1}}>
                <Text 
                  style={{color: '#3a8aec', fontFamily: 'Lato-Regular', fontSize: 20}}>
                  Camera
                </Text>
              </View>


            </View>
            
          </View>

        </View>
        
        
    );
  }
}