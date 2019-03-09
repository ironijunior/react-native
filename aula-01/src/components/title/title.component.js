import React, { PureComponent } from 'react'
import './title.component.css'

export class Title extends PureComponent {
    
    render() {
        return (
            <div className='title-div'>
                <h1>Welcome to React, {this.props.name}!</h1>
            </div>
        )
    }
}