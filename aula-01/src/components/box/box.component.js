import React, { PureComponent } from 'react'

import './box.component.css'

export class Box extends PureComponent {
    
    render() {
        return (
            <div className='bordered-box'>
                {this.props.children}
            </div>
        )
    }
}