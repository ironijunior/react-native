import React from "react";
import { TouchableOpacity, StatusBar, View, ScrollView, Dimensions } from "react-native";

import { styles } from './direct.style'

import { DirectSectionChat } from './section'

import { MessageService } from '@service'
import { BaseScreen } from "@ui/screens/base";

import { DirectModal } from '@ui/screens/modal/direct'
import firebase from "react-native-firebase"

export class DirectScreen extends BaseScreen {

    constructor(props) {
        super(props)

        this.state = {
            chatListDono: [],
            chatListInteressado: [],
            modalVisible: false,
            chat: {},
            idUsuarioLogado: firebase.auth().currentUser.uid
        }

        this.messageService = new MessageService()
    }

    screenWillFocus() {
        StatusBar.setTranslucent(true)
    }

    screenDidFocus() {
        this.messageService.getByUsuarioDonoAnuncio(this.state.idUsuarioLogado)
            .then(_chatlist => {
                this.setState({ chatListDono: _chatlist })
            })

        this.messageService.getByUsuarioInteressadoId(this.state.idUsuarioLogado)
            .then(_chatlist => {
                this.setState({ chatListInteressado: _chatlist })
            })
    }

    _goToChat(chat) {
        //Navegar para o chat
        this.setState({
            ...this.state,
            chat,
            modalVisible: true
        })
    }

    _onCloseModal = () => {
        this.setState({
            ...this.state,
            modalVisible: false
        })
    }

    _renderChatList(chat, index) {
        return (
            <TouchableOpacity
                key={index}
                style={styles.line}
                onPress={() => this._goToChat(chat)} >

                <DirectSectionChat
                    chat={chat}
                />

            </TouchableOpacity>
        )
    }

    renderContent() {
        return (
            <View>
                <ScrollView style={styles.container}>
                    {
                        this.state.chatListInteressado.map((chat, index) => this._renderChatList(chat, index))
                    }
                    {
                        this.state.chatListDono.map((chat, index) => this._renderChatList(chat, index))
                    }

                </ScrollView>
                {
                    this.state.chat.usuarioInteressadoId == this.state.idUsuarioLogado
                        ?
                        <DirectModal
                            autorId={this.state.chat.usuarioDonoAnuncio}
                            postId={this.state.chat.anuncioId}
                            idInteressado={this.state.chat.usuarioInteressadoId}
                            onClose={this._onCloseModal}
                            visible={this.state.modalVisible} />
                        :
                        <DirectModal
                            autorId={this.state.chat.usuarioInteressadoId}
                            postId={this.state.chat.anuncioId}
                            idInteressado={this.state.chat.usuarioDonoAnuncio}
                            onClose={this._onCloseModal}
                            visible={this.state.modalVisible} />
                }
            </View>
        );
    }
}