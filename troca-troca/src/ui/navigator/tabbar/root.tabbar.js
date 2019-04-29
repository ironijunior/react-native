import React from 'react'

import { createBottomTabNavigator } from 'react-navigation'

import { FeedStack } from '@ui/navigator/stacks/feed'
import { DirectStack } from '@ui/navigator/stacks/direct'
import { ProfileStack } from '@ui/navigator/stacks/profile';

import { CoIcon } from '@ui/components/CoIcon';
import { CameraScreen } from '@ui/screens/camera';

export const RootTabBar = createBottomTabNavigator(
    {
        Home: {
            screen: FeedStack
        },
        Camera: {
            screen: CameraScreen
        },
        Direct: {
            screen: DirectStack
        },
        Profile: {
            screen: ProfileStack
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        swipeEnable: false,
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#FFF",
            inactiveTintColor: "#1E575E",
            style: {
                backgroundColor: '#05C3DE',
                alignItems: 'center',
                height: 50,
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,

                elevation: 7,
            },
            showLabel: false
        }
    }
)

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === 'Home') {
        iconName = `home`;
    } else if (routeName === 'Direct') {
        iconName = `chat`;
    } else if (routeName === 'Camera') {
        iconName = `add-square`;
    } else if (routeName === 'Profile') {
        iconName = `user`;
    }

    let abc = {
        fontSize: 25,
        color: tintColor,
    }

    // You can return any component that you like here!
    return <CoIcon name={iconName} style={abc} />;
};