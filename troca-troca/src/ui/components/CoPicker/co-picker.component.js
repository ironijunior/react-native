import React, { Component } from 'react'
import { Picker } from 'react-native'

export class CoPicker extends Component {

    _renderPickers = (item, key) => {
        return <Picker.Item key={key} label={item.label} value={item.valor} />
    }

    //onValueChange retorna (itemSelecionado, itemIndex)

    render() {
        return (
            <Picker
                selectedValue={ this.props.valorSelecionado }
                style={ this.props.styles }
                onValueChange={this.props.onValueChange} >
                
                <Picker.Item 
                    label={ `-- ${this.props.labelTodos} --` } 
                    value={null} 
                    style={{ color: 'white', fontFamily: 'Ubuntu'}} />

                {
                    this.props.valores.map(this._renderPickers)
                }
            </Picker>
        )
    }
}