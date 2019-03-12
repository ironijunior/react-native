import React, { PureComponent } from 'react'

import './header.component.css'

export class ImageHeader extends PureComponent {

    render() {
        return (
            <div className="header">
                <div className="image">
                    <img src={this.props.image}  alt={this.props.text}
                        width="100%" height="100%"/>
                    <span className="image-text">{this.props.text}</span>
                </div>
            </div>
        )
    }
}