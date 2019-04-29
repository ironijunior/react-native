import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CoIcon } from '@ui/components/CoIcon'

import styles from './tabbar.style'

export class TabBarScreen extends Component {

    render() {
        return (
            <View style={styles.iconsContainer}>

                <CoIcon name="home"        style={styles.icons} />
                <CoIcon name="add-square"  style={styles.icons} />
                <CoIcon name="paper-plane" style={styles.icons} />
                <CoIcon name="user"        style={styles.icons} />

            </View>
        )
    }
}