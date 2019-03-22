import React, { Component } from 'react'
import { View, Text, Image, KeyboardAvoidingView } from 'react-native'

import { DirectMessageHeader } from './sections/direct-message-header.section'
import { DirectMessageContent } from './sections/direct-message-content.section'
import { DirectMessageSend } from './sections/direct-message-send.section'

export class DirectMessage extends Component {

    data = {
        image: "https://img.freepik.com/free-photo/adorable-jack-russell-retriever-puppy-portrait_53876-64825.jpg?size=338&ext=jpg",
        name: "Ironi Junior",
        messages: ["hey", "how u doing", "=D"
        //, "ashudahauihaiushas", "1", "2", "3",
        //"4", "5", "6", "7", "8", "9", "10",
        //"11", "12", "13", "14", "15",
        ]
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <DirectMessageHeader
                    name={this.data.name}
                    image={this.data.image} />

                <DirectMessageContent messages={this.data.messages} />
                
                <DirectMessageSend />
                
            </View>
        )
    }
}