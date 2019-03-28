import React, { Component } from 'react'

import './add-hero-form.component.css'

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
        this.setState({
            name: '',
            image: ''
        })
    }

    render() {
        return (
            <form className="form-addhero" onSubmit={this.handleSubmit}>
                <div className="form-field">
                    <span className="item-form-span">Nome</span>
                    <input className="item-form-input" type="text" value={this.state.name} onChange={this.onNameChange} />
                </div>
                
                <div className="form-field">
                    <span className="item-form-span">Imagem</span>
                    <input className="item-form-input" type="text" value={this.state.image} onChange={this.onImageChange} />
                </div>
                <div className="form-field">
                    <button className="item-form-button">Register</button>
                </div>
            </form>
        )
    }
}