import React, { Component, Fragment } from 'react'

import { Hero } from '../'

export class HeroList extends Component {

    render() {
        return (
            <Fragment>
                {
                    this.props.heroes.map((hero, key) => (
                        <Hero chave={key} onRemoveHero={this.props.onRemoveHero} key={key} image={hero.image} name={hero.name} />
                    ))
                }
            </Fragment>
        )
    }
}