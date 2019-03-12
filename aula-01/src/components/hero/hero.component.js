import React, { Component, Fragment } from 'react'

import './hero.component.css'

export class Hero extends Component {

    render() {
        return (
            <div className="hero-card">
                <div className="hero-image">
                    <img alt={this.props.name} src={this.props.image} />
                    <span className="hero-name">{this.props.name}</span>
                </div>
                
            </div>
        )
    }
}