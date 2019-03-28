import { createBottomTabNavigator } from 'react-navigation'

import { FeedStack } from '@ui/navigator/stacks/feed'

import { TabBarScreen } from '@ui/screens/tabbar'

export const RootTabBar = createBottomTabNavigator(
    {
        FeedStack: {
            screen: FeedStack
        }
    },
    {
        tabBarComponent: TabBarScreen,
        swipeEnable: false,
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#000",
            inactiveTintColor: "#CCC",
        }
    }
)