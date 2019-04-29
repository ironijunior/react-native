import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './post.style'

export const PostImage = (props) => (
    <View style={styles.postImageContainer}>
        <Image style={styles.postImage}
            source={{ uri: props.post.imagem }} />

        <View style={styles.postValueBox} >
            <Text style={styles.postValue} >
                R$ {props.post.valor}
            </Text>
        </View>
    </View>
)