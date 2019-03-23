import React from 'react'
import {View, Text} from 'react-native'

import { CAMERA_ROUTES } from './camera.route'

import { CameraScreen } from '@ui/screens/camera'

export const CameraRoutes = {

    [CAMERA_ROUTES.CAMERA]: {
        screen: CameraScreen
    }

}