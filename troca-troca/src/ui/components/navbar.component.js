import React, { Component, Fragment } from 'react'
import { Text, View, TouchableOpacity, StatusBar, Platform  } from 'react-native'

import { CoIcon } from '@ui/components/CoIcon'

export class NavBar extends Component {

    goToDirect = () => {
        /* this.props.navigation.navigate(DIRECT_ROUTES.DIRECT, { 
            title: 'Direct Message NavBar' 
        }) */
    }

    goToCamera = () => {
        /* this.props.navigation.navigate(CAMERA_ROUTES.CAMERA) */
    }

    render() {
        return (
            <Fragment>
                <StatusBar barStyle='light-content' backgroundColor={'#05C3DE'} />
                
                <View style={{
                    paddingHorizontal: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: 'row', 
                    backgroundColor: "#05C3DE",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,

                    elevation: 7,
                    ...Platform.select({
                        ios: {
                          height: 90,
                          paddingTop: 40,
                        },
                        android: {
                          height: 100,
                          paddingTop: 20,
                        }
                      }) }}>

                    <TouchableOpacity  id="camera" onPress={this.goToCamera}>
                        <CoIcon name={'handshake-o'} style={{ fontSize: 60, color: "white" }} />
                    </TouchableOpacity >

                </View>
            </Fragment>
        )
    }
}