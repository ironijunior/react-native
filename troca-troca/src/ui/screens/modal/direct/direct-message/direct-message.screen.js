import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import firebase from 'react-native-firebase'

import { DirectMessageHeader } from './sections/direct-message-header.section'
import { DirectMessageSend } from './sections/direct-message-send.section'

import { UserService } from '@service'
import { MessageService } from '@service'

export class DirectMessage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentUserId: firebase.auth().currentUser.uid,
            usuarioDonoAnuncio: {},
            mensagens: [],
            conversaId: null
        }
        this.userService = new UserService()
        this.messageService = new MessageService()
    }

    componentDidMount() {
        let usuarioDonoPost = {}
        this.userService.getById(this.props.autorId)
            .then(resp => {
                usuarioDonoPost.nome = resp.nome
                usuarioDonoPost.imagem = resp.imagem
                usuarioDonoPost.id = resp.id

                this.setState({
                    ...this.state,
                    usuarioDonoAnuncio: usuarioDonoPost
                })
            })

        this.messageService.getByAnuncioDonoInteressado(
            this.props.postId,
            this.props.autorId,
            this.state.currentUserId
        ).then(resp => {
            this.setState({
                ...this.state,
                mensagens: resp[0] ? resp[0].mensagens : [],
                conversaId: resp[0] ? resp[0].id : null,
                usuarioDonoAnuncio: usuarioDonoPost
            })
        })
    }

    _renderMessage = (message, key) => (
        <View key={key} style={{ alignItems: message.idUsuario === this.state.currentUserId ? 'flex-end' : 'flex-start' }}>
            <View style={{ borderRadius: 25, backgroundColor: '#d3d3d3', margin: 6, padding: 12 }}>

                {message.isPhoto ?
                    <Image style={{
                        width: 250,
                        height: 150,
                    }}
                        source={{
                            uri: message.text
                        }} />
                    :
                    <Text style={{
                        fontFamily: 'Lato-Regular',
                        fontSize: 18,
                        color: 'black'
                    }}>
                        {
                            message.text
                        }
                    </Text>
                }
            </View>
        </View>
    )

    _onSentMessage = (message, isphoto) => {
        mensagens = [...this.state.mensagens, {
            "recebido": !false,
            "text": message,
            "isPhoto": isphoto,
            "idUsuario": this.state.currentUserId
        }]

        this.messageService.adicionarMensagem(
                this.state.conversaId, this.props.postId,
                this.props.autorId,
                this.state.currentUserId, mensagens)
            .then(resp => {
                this.setState({ 
                    ...this.state, 
                    mensagens: resp.mensagens,
                    conversaId: resp.id 
                })
            })
            .catch(e => alert(`Erro ao enviar mensagem! ${e}`))
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <DirectMessageHeader
                    name={this.state.usuarioDonoAnuncio.nome}
                    image={this.state.usuarioDonoAnuncio.imagem}
                    onClose={this.props.onClose} />

                <ScrollView
                    style={{ backgroundColor: "white" }}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'flex-end'
                    }}>

                    {
                        this.state.mensagens ? this.state.mensagens.map(this._renderMessage) : null
                    }
                </ScrollView>

                <DirectMessageSend onSendMessage={this._onSentMessage} />

            </View>
        )
    }
}
