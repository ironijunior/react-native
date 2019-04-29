import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { CoIcon } from '@ui/components/CoIcon'

const LinearGradient = require('react-native-linear-gradient').default;

export class DirectMessageHeader extends Component {

    render() {
        return (
            <View style={{height: 60, flexDirection: 'row'}}>
                <TouchableOpacity onPress={ this.props.onClose } 
                    style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <CoIcon name="left-arrow" style={{color: 'black', fontSize: 30}} />
                </TouchableOpacity>

                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                            colors={['#1E575E', '#05C9E3']}
                        style={{ justifyContent: 'center', alignItems: 'center',
                            borderRadius: 50, height: 38, width: 38}}>
                        
                        <Image
                            style={{width: 35, height: 35, borderRadius: 50}} 
                            source={{uri: this.props.image}}></Image>

                    </LinearGradient>
                </View>


                <View style={{alignItems: 'flex-start', justifyContent: 'center', flex: 5}}>
                    <Text style={{fontFamily: 'Lato-Regular', fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                        {
                            this.props.name
                        }
                    </Text>
                </View>
            </View>
        )
    }
}