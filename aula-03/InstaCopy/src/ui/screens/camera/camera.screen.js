import React, { Fragment } from 'react'
import { Platform, TouchableOpacity, StatusBar } from 'react-native'
import { BaseScreen } from '@ui/screens/base'
import { HeaderBackButton, NavigationActions } from 'react-navigation'

import styles from './camera.style'

import { IgCamera } from '@ui/components/IgCamera'
import { IgIcon } from '@ui/components/IgIcon'

import { StorageService } from '@service/storage'

export class CameraScreen extends BaseScreen {

    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title')

        return {
            title: title,
            headerTransparent: true,
            headerRight: 
                <TouchableOpacity onPress={navigation.getParam('_onDismiss')}>
                    <IgIcon name='right-arrow' style={{ color: 'black', fontSize: 24, paddingRight: 10 }} />
                </TouchableOpacity>
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            text: 'Search',
        };

        this._onDismiss = this._onDismiss.bind(this)
        this.onPhotoTook = this.onPhotoTook.bind(this)
    }

    _onDismiss() {
        //this.props.navigation.pop()

        const backAction = NavigationActions.back()
        this.props.navigation.dispatch(backAction)
    }

    componentDidMount() {
        super.componentDidMount()

        this.props.navigation.setParams({
            _onDismiss: this._onDismiss
        })
    }

    screenWillFocus() {
        StatusBar.setTranslucent(false)
    }

    onPhotoTook = (photo) => {
        StorageService.setObject('photo-camera', photo)

        this._onDismiss()
    }

    renderContent() {
        return (
            <IgCamera onPhotoTook={ this.onPhotoTook } />
        )
    }
}