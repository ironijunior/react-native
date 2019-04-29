import { createStackNavigator } from 'react-navigation'

import { LoginRoutes } from '@ui/navigator/routes/login'

const configs = {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
        header: null,
    },
}

export const LoginStack = createStackNavigator(LoginRoutes, configs)
