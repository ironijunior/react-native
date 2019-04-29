import { createStackNavigator } from 'react-navigation'

import { ProfileStack } from '@ui/navigator/stacks/profile'
import { LoginStack } from './login/login.stack';

export const RootLoginStack = createStackNavigator(
    {
        LoginStack: {
            screen: LoginStack,
        },
        ProfileStack: {
            screen: ProfileStack,
            navigationOptions: {
                header: null
            }
        }
    }
)