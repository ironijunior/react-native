import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import { IgIcon } from '../../../components/IgIcon/ig-icon.component'

export class DirectMessageSend extends Component {

    render() {
        return (
            <View style={{height: 70, justifyContent: 'center', backgroundColor: 'white'}}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: 50,
                    borderRadius: 25, borderColor: 'gray', borderWidth: 1, marginLeft: 5, marginRight: 5}}>
                    
                    <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 5, borderRadius: 50, width: 40, height: 40, backgroundColor: 'blue'}}>
                        <IgIcon name="photo-camera" style={{fontSize: 24, color: 'white'}} />
                    </View>

                    <View style={{alignItems: 'flex-start', justifyContent: 'center', borderRadius: 25, height: 40, flex: 2}}>
                        <TextInput
                            style={{height: 40, paddingLeft: 15, fontSize: 18}}
                            placeholder="Message..."
                            onChangeText={(text) => this.setState({text})}
                            />
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 5, borderRadius: 50, width: 40, height: 40}}>
                        <IgIcon name="photo-camera" style={{fontSize: 24, color: 'black'}} />
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 5, borderRadius: 50, width: 40, height: 40}}>
                        <IgIcon name="photo-camera" style={{fontSize: 24, color: 'black'}} />
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 5, borderRadius: 50, width: 40, height: 40}}>
                        <IgIcon name="photo-camera" style={{fontSize: 24, color: 'black'}} />
                    </View>
                    
                </View>
            </View>
        )
    }
}