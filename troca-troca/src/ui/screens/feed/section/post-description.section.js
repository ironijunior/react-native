import React from 'react'
import { View, Text } from 'react-native'

import styles from './post.style'

export const PostDescription = (props) => (
    <View style={{ paddingHorizontal: 10, paddingBottom: 10 }} >
        <Text style={styles.descriptionText} >
            {props.descricao}
        </Text>
    </View>
)