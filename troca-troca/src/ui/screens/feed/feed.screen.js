import React from "react";
import { Platform, StatusBar, View, ScrollView, Text } from "react-native";

import firebase from 'react-native-firebase'

import styles from './feed.style'

import { BaseScreen } from '@ui/screens/base'
import { Post } from './section'

import { PostService, CategoriaService } from '@service'
import { CoPicker } from "@ui/components/CoPicker/"

export class FeedScreen extends BaseScreen {

    constructor(props) {
        super(props)

        this.postService = new PostService()
        this.categoriaService = new CategoriaService()

        this.state = {
            posts: [],
            idUsuarioLogado: firebase.auth().currentUser.uid,
            categoriasAtivas: [],
            categoriaSelecionada: ''
        }
    }

    screenDidFocus() {
        this.postService.getAll().then(posts => {
            this.setState({ posts })
        })

        let categorias = []
        this.categoriaService.getAllAtivas()
            .then(categoriasAtivas => {
                categoriasAtivas.forEach(cat => {
                    categorias.push({
                        label: cat.nome,
                        valor: cat.id
                    })
                })
                this.setState({...this.state, categoriasAtivas: categorias })
            })
    }

    screenWillFocus() {
        StatusBar.setTranslucent(true)
    }

    _getCategoriaSelecionada = (categoria, index) => {
        this.setState({ ...this.state, categoriaSelecionada: categoria })
        
        if(categoria === null) {
            this.postService.getAll().then(posts => {
                this.setState({ posts })
            })
        } else {
            this.postService.getByCategoria(categoria).then(posts => {
                this.setState({ posts })
            })
        }
    }

    renderPost = (post, key) => (
        <Post key={key} 
            post={post} 
            idUsuarioLogado={this.state.idUsuarioLogado} 
            navigation={this.props.navigation} >
        </Post>
    )

    renderContent() {
        return (

            <ScrollView
                style={styles.container}
                contentContainerStyle={Platform.OS === 'ios' ? 20 : 0}>

                <CoPicker 
                    styles={ styles.picker }
                    labelTodos="Categorias"
                    onValueChange={ this._getCategoriaSelecionada }
                    valorSelecionado={ this.state.categoriaSelecionada }
                    valores={ this.state.categoriasAtivas }
                />

                {
                    this.state.posts.map(this.renderPost)
                }

            </ScrollView>

        );
    }
}