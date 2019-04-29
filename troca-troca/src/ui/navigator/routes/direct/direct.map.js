import React from 'react'

import { DIRECT_ROUTES } from './direct.route'

import { DirectScreen } from '@ui/screens/direct'

import { NavBar } from '@ui/components'

export const DirectRoutes = {
    
    [DIRECT_ROUTES.DIRECT]: {
        screen: DirectScreen,
        navigationOptions: ({ navigation }) => ({
            header: <NavBar navigation={navigation} />
        }),
    },
}