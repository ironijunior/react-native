import React, { Component } from 'react'

import './hero.component.css'

export class Hero extends Component {

    onClickImage = (e) => {
        this.props.onRemoveHero(this.props.chave);
    }

    render() {
        return (
            <div className="hero-card" onClick={this.onClickImage}>
                <div className="hero-image">
                    <img alt={this.props.name} src={this.props.image} />
                    <span className="hero-name">{this.props.name}</span>
                </div>
                
            </div>
        )
    }
}