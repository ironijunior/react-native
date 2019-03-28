import React, { Component } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView, Platform } from 'react-native'

export class DirectMessageContent extends Component {

    renderMessage = (message, key) => (
        <View key={key}>
            <View style={{borderRadius: 25, backgroundColor: '#d3d3d3', margin: 6, padding: 12}}>
                <Text style={{
                    fontFamily: 'Lato-Regular', 
                    fontSize: 18,
                    color: 'black'
                    }}>
                    {
                        message
                    }
                </Text>
            </View>
        </View>
    )

    render() {
        return (
            <ScrollView 
                style={{backgroundColor: "white"}}
                contentContainerStyle={{
                    flexGrow: 1, 
                    alignItems: 'flex-end', 
                    justifyContent: 'flex-end'}}>
                
                {
                    this.props.messages.map(this.renderMessage)
                }
            </ScrollView>
        )
    }
}