import React, { Component } from 'react';
import { Modal, View, Alert } from 'react-native';

import { DirectMessage } from './direct-message'

export class DirectModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.visible}
                    onRequestClose={() => {
                        this.setModalVisible(false)
                    }}>

                    <View style={{ flex: 1 }}>

                        <DirectMessage
                            postId={this.props.postId}
                            autorId={this.props.autorId}
                            idInteressado={this.props.idInteressado}
                            onClose={this.props.onClose} />

                    </View>
                </Modal>

            </View>
        );
    }
}