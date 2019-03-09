import React, { Component } from 'react'

export class AddHeroForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            image: ''
        }

        //Uma forma de bind para o this
        this.onImageChange = this.onImageChange.bind(this);
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState({
            name: name
        })
    }

    onImageChange(e) {
        const image = e.target.value
        this.setState({
            image: image
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let hero = {
            name: this.state.name,
            image: this.state.image
        }
        this.props.onAddHero(hero)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome:
                        <input type="text" value={this.state.name} onChange={this.onNameChange} />
                    </label>
                    <label>
                        Imagem:
                        <input type="text" value={this.state.image} onChange={this.onImageChange} />
                    </label>

                <button>Adicionar</button>
            </form>
        )
    }
}