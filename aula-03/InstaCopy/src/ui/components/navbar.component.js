import React, { Component, Fragment } from 'react'
import { View, TouchableOpacity, StatusBar, Platform  } from 'react-native'

import { IgIcon } from '@ui/components/IgIcon'

import { DIRECT_ROUTES } from '@ui/navigator/routes/direct'
import { CAMERA_ROUTES } from '@ui/navigator/routes/camera'

export class NavBar extends Component {

    goToDirect = () => {
        this.props.navigation.navigate(DIRECT_ROUTES.DIRECT, { 
            title: 'Direct Message NavBar' 
        })
    }

    goToCamera = () => {
        this.props.navigation.navigate(CAMERA_ROUTES.CAMERA)
    }

    render() {
        return (
            <Fragment>
                <StatusBar barStyle='dark-content' backgroundColor={'transparent'} />
                
                <View style={{
                    paddingHorizontal: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: 'row', 
                    marginTop: 10, 
                    marginBottom: 10,
                    ...Platform.select({
                        ios: {
                          height: 90,
                          paddingTop: 40,
                        },
                        android: {
                          height: 62,
                          paddingTop: 20,
                        }
                      }) }}>

                    <TouchableOpacity  id="camera" onPress={this.goToCamera}>
                        <IgIcon name="photo-camera-empty" style={{ color: 'black', fontSize: 35 }} />
                    </TouchableOpacity >

                    <IgIcon
                        style={{ fontSize: 40, color: 'black' }}
                        name='instagram_lg_black'
                    />

                    <View>
                    <TouchableOpacity  id="direct" onPress={this.goToDirect}>
                        <IgIcon name="paper-plane" style={{ color: 'black', fontSize: 35 }} />
                    </TouchableOpacity >
                    </View>

                </View>
            </Fragment>
        )
    }
}