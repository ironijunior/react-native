import { createAppContainer } from 'react-navigation';

import { RootStack, RootLoginStack } from '@ui/navigator/stacks'

export const Navigator = createAppContainer(
    RootStack
)

export const Login = createAppContainer(
    RootLoginStack
)