import React, { Component } from 'react'
import { View } from 'react-native'
import { BaseScreen } from '@ui/screens/base'
import { IgIcon } from '@ui/components/IgIcon'

import styles from './tabbar.style'

export class TabBarScreen extends Component {

    render() {
        return (
            <View style={styles.iconsContainer}>

                <IgIcon name="home"        style={styles.icons} />
                <IgIcon name="search"      style={styles.icons} />
                <IgIcon name="add-square"  style={styles.icons} />
                <IgIcon name="heart-empty" style={styles.icons} />
                <IgIcon name="user"        style={styles.icons} />

            </View>
        )
    }
}