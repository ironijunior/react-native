import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

import { UserService, PostService } from '@service'

import { styles } from './direct.section.style'
import firebase from "react-native-firebase"

export class DirectSectionChat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: {},
            anuncio: {},
            idUsuarioLogado: firebase.auth().currentUser.uid
        }

        this.UserService = new UserService()
        this.PostService = new PostService()
    }

    componentDidMount() {
        if (this.state.idUsuarioLogado == this.props.chat.usuarioDonoAnuncio) {
            this.UserService.getById(this.props.chat.usuarioInteressadoId).then(usuario => {
                this.setState({ usuario })
            })
        } else {
            this.UserService.getById(this.props.chat.usuarioDonoAnuncio).then(usuario => {
                this.setState({ usuario })
            })
        }
        this.PostService.getByIdAnuncio(this.props.chat.anuncioId).then(anuncio => {
            anuncio.map(a => {
                this.setState({ anuncio: a })
            })
        })

    }

    render() {
        return (
            <View style={styles.line}>
                <View style={styles.produto}>
                    <Image style={styles.produtoImage} source={{ uri: this.state.anuncio.imagem }} />
                </View>
                <View style={styles.descricao}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }} > {this.state.usuario.nome} </Text>
                    <Text style={{ fontSize: 14 }}> {this.state.anuncio.descricao} </Text>
                </View>
                <View style={styles.produtoPreco}>
                    <Text style={{ color: "white", fontSize: 16 }}> R$ {this.state.anuncio.valor} </Text>
                    <View style={styles.produtoPrecoCorteDireito}></View>
                </View>
            </View>
        )
    }
}
