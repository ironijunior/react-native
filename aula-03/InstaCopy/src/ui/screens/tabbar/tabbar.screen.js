import React, { Component } from 'react'
import { View } from 'react-native'
import { BaseScreen } from '@ui/screens/base'
import { IgIcon } from '@ui/components/IgIcon'

export class TabBarScreen extends Component {

    render() {
        return (
            <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 5 }}>

                <IgIcon name="home"
                        style={{ fontSize: 25, color: 'black' }}
                    />

                <IgIcon name="search"
                        style={{ fontSize: 25, color: 'black' }}
                    />

                <IgIcon name="add-square"
                        style={{ fontSize: 25, color: 'black' }}
                    />

                <IgIcon name="heart-empty"
                        style={{ fontSize: 25, color: 'black' }}
                    />

                <IgIcon name="user"
                        style={{ fontSize: 25, color: 'black' }}
                    />

            </View>
        )
    }
}