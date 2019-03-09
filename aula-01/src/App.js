import React, { Component, Fragment } from 'react'

import { Title, StatelessTitle, ImageHeader } from './components'

import { HeroList } from './components'

import { AddHeroForm } from './components'

import { Box } from './components'

import heroes from './heroes.json'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      heroes: []
    }
  }

  componentDidMount() {
    this.setState({heroes: heroes})
  }

  addHero = (hero) => {
    let newheroes = [...this.state.heroes, hero]
    this.setState({heroes: newheroes})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PrevProps", prevProps)
    console.log("CurrProps", this.props)
    console.log("PrevState", prevState)
    console.log("CurrState", this.state)
  }

  render() {
    return (
      <Fragment>
        <ImageHeader text="Welcome to React Heroes!" 
          image="https://catracalivre.com.br/wp-content/uploads/2014/03/os_vingadores_2_-_reproducao.jpg" />
        
        <br />

        <AddHeroForm onAddHero={this.addHero} />

        <br />

        <Box><HeroList heroes={this.state.heroes} /></Box>

      </Fragment>
    )
  }
}

export default App;
