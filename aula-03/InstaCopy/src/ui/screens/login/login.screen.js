import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import { IgIcon } from '../../components/IgIcon/ig-icon.component';

const dime = Dimensions.get('window');

export class Login extends Component {

    render() {
        return (

            <LinearGradient
                start={{x: 1, y: 0}} end={{x: 0, y: 1}} 
                colors={['#A21391', '#CD106A', '#D82851', '#E95634', '#F8A64D']}
                style={styles.gradient}>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 30, marginRight: 30}}>

                    <View>
                        <IgIcon name="instagram_lg_black" style={{fontSize: 40, color: 'white'}} />
                    </View>

                    <View>
                        <Text style={{fontFamily: 'Lato-Regular', fontSize: 22, color: 'white'}}>Sign in and use more features</Text>
                    </View>

                    <View style={{paddingLeft: 20, backgroundColor: 'white', flexDirection: 'row', borderRadius: 5}}>
                        <TextInput placeholder="Email or username"
                            style={{flex: 1, fontFamily: 'Lato-Regular', fontSize: 16, color: '#D8D8D8'}} />
                    </View>

                    <View style={{paddingLeft: 20, backgroundColor: 'white', flexDirection: 'row', borderRadius: 5}}>
                        <TextInput placeholder="Password"
                            style={{flex: 1, fontFamily: 'Lato-Regular', fontSize: 16, color: '#D8D8D8'}} />
                    </View>

                    <View style={{backgroundColor: '#3897F0', justifyContent: 'center', alignItems: 'center', height: 50, flexDirection: 'row', borderRadius: 5}}>
                        <Text style={{flex: 1, fontSize: 16, fontFamily: 'Lato-Regular', color: 'white'}}>Sign in</Text>
                    </View>

                    <View style={{flexDirection: 'row', borderRadius: 5, justifyContent: 'space-around'}}>
                        <View>
                            <Text style={{fontFamily: 'Lato-Regular', fontSize: 14, color: '#F9F9F9'}}>
                                Forgot your login details?
                            </Text>
                        </View>

                        <View>
                            <Text style={{fontFamily: 'Lato-Regular', fontSize: 14, color: '#FAFAFA', textDecorationLine: 'underline'}}>
                                Get help signing in.
                            </Text>
                        </View>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 5}}>
                        
                        <View style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1 }}></View>
                        
                        <View style={{marginLeft: 25, marginRight: 25, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'Lato-Regular', fontSize: 14, color: '#FAFAFA'}}>
                                OR
                            </Text>
                        </View>

                        <View style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1 }}/>

                    </View>


                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 5}}>
                        
                        <View style={{ flex: 1, alignItems: 'flex-end'}}>
                            <IgIcon name="facebook_lg" style={{color: 'white', fontSize: 15}} />
                        </View>
                        
                        <View style={{flex: 2, alignItems: 'flex-start', marginLeft: 10, justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'Lato-Regular', fontSize: 14, color: '#FAFAFA'}}>
                                Continue with Facebook
                            </Text>
                        </View>

                    </View>

                </View>
            
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    gradient: {
      width: dime.width,
      height: dime.height,
    },
  });