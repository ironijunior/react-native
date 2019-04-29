import React, { Component } from 'react';
import { Modal, View, Alert } from 'react-native';

import { CoCamera } from '@ui/components/CoCamera'

export class CameraModal extends Component {

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
                        <CoCamera onPhotoTook={ this.props.onPhotoTook } />
                    </View>
                </Modal>

            </View>
        );
    }
}