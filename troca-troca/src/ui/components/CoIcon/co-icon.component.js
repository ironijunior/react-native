import React, { Component } from 'react'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons'

import icoMoonConfig from '@assets/fonts/selection.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "MyIcons", "MyIcons")

export class CoIcon extends Component {
    
    render() {
        const { name, style } = this.props

        return (
            <Icon name={name} style={style} />
        )
    }

}