import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import { IgIcon } from '../../../components/IgIcon/ig-icon.component'

export class DirectMessageHeader extends Component {

    render() {
        return (
            <View style={{height: 60, flexDirection: 'row'}}>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <IgIcon name="left-arrow" style={{color: 'black', fontSize: 30}} />
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Image
                        style={{width: 35, height: 35, borderRadius: 50}} 
                        source={{uri: this.props.image}}></Image>
                </View>
                <View style={{alignItems: 'flex-start', justifyContent: 'center', flex: 5}}>
                    <Text style={{fontFamily: 'Lato-Regular', fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                        {
                            this.props.name
                        }
                    </Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <IgIcon name="photo-camera" style={{color: 'black', fontSize: 30}} />
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <IgIcon name="man" style={{color: 'black', fontSize: 30}} />
                </View>
            </View>
        )
    }
}