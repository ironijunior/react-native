import React, { Component } from 'react'
import { View } from 'react-native'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons'

import icoMoonConfig from '../../assets/fonts/selection.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "my-icons", "my-icons")

export class IgIcon extends Component {
    
    render() {
        const { name, style } = this.props

        return (
            <Icon name={name} style={style} />
        )
    }

}