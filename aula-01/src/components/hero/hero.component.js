import React, { Component, Fragment } from 'react'

export class Hero extends Component {

    render() {
        return (
            <Fragment>
                <img alt={this.props.name} src={this.props.image} />
                {this.props.name}
            </Fragment>
        )
    }
}