import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'

import { CoIcon } from '@ui/components/CoIcon'
import { CameraModal } from '@ui/screens/modal/camera';

var RNFS = require('react-native-fs')

export class DirectMessageSend extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',
            cameraVisible: false,
            photo: ''
        }
    }

    _onPressSent = () => {
        if(this.state.text !== '') {
            this.props.onSendMessage(this.state.text, false)
            this.setState({
                text: ''
            })
        }
    }

    _onPhotoTook = async (photoPath) => {
        let photo = await RNFS.readFile(photoPath, "base64")
        
        photo = `data:image/jpeg;base64,${photo}`

        this.setState({ ...this.state, cameraVisible: false, photo: photo })
        this.props.onSendMessage(photo, true)
    }

    render() {
        return (
            <View style={{height: 70, justifyContent: 'center', backgroundColor: 'white'}}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: 50,
                    borderRadius: 25, borderColor: 'gray', borderWidth: 1, marginLeft: 5, marginRight: 5}}>
                    
                    <View style={{alignItems: 'flex-start', justifyContent: 'center', borderRadius: 25, height: 40, flex: 2}}>
                        <TextInput
                            style={{height: 40, paddingLeft: 15, fontSize: 18}}
                            placeholder="Message..."
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            />
                    </View>
                    
                    <TouchableOpacity onPress={() => { this.setState({ ...this.state, cameraVisible: true }) }} style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 5, borderRadius: 50, width: 40, height: 40, backgroundColor: '#05C3DE'}}>
                        <CoIcon name="photo-camera" style={{fontSize: 24, color: 'white'}} />
                        <CameraModal visible={this.state.cameraVisible} onPhotoTook={this._onPhotoTook} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._onPressSent} style={{ alignItems: 'center', justifyContent: 'center', marginRight: 5, marginLeft: 5, borderRadius: 50, width: 40, height: 40, backgroundColor: '#05C3DE'}}>
                        <CoIcon name="paper-plane" style={{fontSize: 24, color: 'white'}} />
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}