import React, { Component, Fragment } from 'react'
import { View, Image, Text } from 'react-native'

import styles from './post.style'

import { PostAuthor } from './post-author.section'
import { PostDescription } from './post-description.section'
import { PostImage } from './post-image.section'
import { PostButton } from './post-button.section';

export class Post extends Component {

    render() {
        let { post } = this.props
        return (
            <View style={styles.postContainer} >

                <PostAuthor postId={post.id} autorId={post.usuarioId} local={post.local} />

                <PostDescription postId={post.id} descricao={post.descricao} />

                <PostImage postId={post.id} post={post} />

                {
                    post.usuarioId !== this.props.idUsuarioLogado 
                        ?
                    <PostButton postId={post.id} autorId={post.usuarioId} idUsuarioLogado={this.props.idUsuarioLogado}
                    navigation={this.props.navigation} />
                        : 
                    null
                }
                
            </View>
        )
    }
}