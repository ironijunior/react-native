import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native'

import styles from './post.style'

import { DirectModal } from '@ui/screens/modal/direct'
import { CoIcon } from '@ui/components/CoIcon';
const LinearGradient = require('react-native-linear-gradient').default;

const dime = Dimensions.get('window')

const styl = StyleSheet.create({
    styleFull: {
        width: dime.width
    },
    styleHalf: {
        width: ((dime.width - 10) / 2) 
    },
    styleDefault: {
        height: 60,
        borderRadius: 5
    },
    styleDefaultGreen: {
        backgroundColor: 'green'
    },
    styleDefaultRed: {
        backgroundColor: 'red'
    },
    styleDefaultAutorPost: {
        backgroundColor: '#C7C7C7'
    }
})

export class PostButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            flexSim: ((dime.width / 2) - 10),
            flexNao: ((dime.width / 2) - 10),
            modalVisible: false
        }
    }

    _onSimClick = () => {
        this.setState({
            ...this.state,
            flexSim: 1, flexNao: 0, modalVisible: true
        })
    }

    _onNaoClick = () => {
        this.setState({
            ...this.state,
            flexNao: 1, flexSim: 0
        })
    }

    _onCloseModal = () => {
        this.setState({
            ...this.state,
            modalVisible: false
        })
    }

    render() {
        if (this.props.autorId == this.props.idUsuarioLogado) {
            return (
                <View style={styles.postButtonContainer} >
                    <TouchableOpacity
                        style={[styl.styleDefaultAutorPost, { flex: 1 }]}
                        onPress={null}>

                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={styles.postButtonContainer} >

                    <TouchableOpacity
                        style={[
                            styl.styleDefault,
                            { flex: this.state.flexNao }]}
                        onPress={this._onNaoClick}>
                        <LinearGradient
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#F55700', '#E42E57']}
                            style={{
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 5, flex: 1
                            }}>
                            <CoIcon name={'cross'} style={{ fontSize: 45, color: 'white', paddingHorizontal: 15 }} />                            
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styl.styleDefault,
                            { flex: this.state.flexSim }]}
                        onPress={this._onSimClick}>
                        <LinearGradient
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#1FDDAD', '#05C3DE']}
                            style={{
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 5, flex: 1
                            }}>
                            <CoIcon name={'check'} style={{ fontSize: 50, color: 'white', paddingHorizontal: 15 }} />
                        </LinearGradient>
                    </TouchableOpacity>

                    <DirectModal
                        autorId={this.props.autorId}
                        postId={this.props.postId}
                        idInteressado={this.props.idUsuarioLogado}
                        onClose={this._onCloseModal}
                        visible={this.state.modalVisible} />
                </View>
            )

        }
    }
}