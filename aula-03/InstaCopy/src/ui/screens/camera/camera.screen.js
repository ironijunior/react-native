import React, { Fragment } from 'react'
import { Platform, TouchableOpacity, StatusBar } from 'react-native'
import { BaseScreen } from '@ui/screens/base'
import { HeaderBackButton, NavigationActions } from 'react-navigation'

import styles from './camera.style'

import { IgCamera } from '@ui/components/IgCamera'
import { IgIcon } from '@ui/components/IgIcon'

export class CameraScreen extends BaseScreen {

    renderContent() {
        return (
            <IgCamera />
        )
    }
}