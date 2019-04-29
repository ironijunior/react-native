import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

import styles from './post.style'

import { UserService } from '@service';

const LinearGradient = require('react-native-linear-gradient').default;

export class PostAuthor extends Component {

    constructor(props) {
        super(props)

        this.userService = new UserService()

        this.state = {
            autor: {}
        }
    }

    componentDidMount() {
        this.userService.getById(this.props.autorId)
            .then(autor => { 
                this.setState({ autor })
            })
    }

    render() {
        return (
            <View style={styles.authorContainer}>

                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                        colors={['#1E575E', '#05C9E3']}
                    style={{
                        justifyContent: 'center', alignItems: 'center',
                        borderRadius: 32, height: 64, width: 64}}>
                    
                    <Image style={styles.authorImage}
                        source={{ uri: this.state.autor.imagem }} />

                </LinearGradient>
            
                <View style={{ flex: 4, justifyContent: 'flex-start', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Ubuntu-M', color: '#979797' }} >{this.state.autor.nome}</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Ubuntu-R', color: '#979797' }}>{this.props.local}</Text>
                </View>

            </View>
        )
    }

}