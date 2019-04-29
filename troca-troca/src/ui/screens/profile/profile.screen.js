import React, { Component } from 'react';
import { 
    View, 
    KeyboardAvoidingView, 
    Image, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StatusBar 
} from 'react-native';

import firebase from 'react-native-firebase'

import { BaseScreen } from '@ui/screens/base';
import { HeaderBackButton, NavigationActions } from 'react-navigation'

import ImagePicker from 'react-native-image-picker';

import { CoIcon } from '@ui/components/CoIcon';
import styles from './profile.style'
import { UserService, LoginService } from '@service'

export class ProfileScreen extends BaseScreen {
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title')
        const back = title ? 
                        <TouchableOpacity
                            style={styles.touchExit}
                            onPress={navigation.getParam('_onDismiss')}
                        >
                            <CoIcon name="left-arrow" style={styles.iconBack} />
                        </TouchableOpacity>
                        : null
        const exit = 
            title ? null :
                <TouchableOpacity
                    style={styles.touchExit}
                    onPress={navigation.getParam('onLogout')}
                >
                    <CoIcon name="exit" style={styles.iconExit} />
                </TouchableOpacity>

        return {
            headerLeft: back,
            headerRight: exit,
            headerTransparent: true
        }
    }

    constructor(props) {
        super(props)

        this.loginService = new LoginService()
        this.userService = new UserService()

        this.state = {
            nome: '',
            email: '',
            senha: '',
            avatarSource: null
        }
        this.onPicker = this.onPicker.bind(this)
        this.createOrUpdateUser = this.createOrUpdateUser.bind(this)
        this._onDismiss = this._onDismiss.bind(this)
        this.onLogout = this.onLogout.bind(this)
    }

    _onDismiss() {
        const backAction = NavigationActions.back()
        this.props.navigation.dispatch(backAction)
    }

    componentDidMount() {
        super.componentDidMount()

        this.props.navigation.setParams({
            _onDismiss: this._onDismiss,
            onLogout: this.onLogout
        })
    }

    screenDidFocus() {
        super.screenDidFocus()
        const user = firebase.auth().currentUser
        if (user) {
            const userAction = NavigationActions.setParams({
                params: { title: 'user' },
                key: 'Profile'
            });
            this.props.navigation.dispatch(userAction)
            this.loginService.getUser(user.email)
                .then(user => {
                    this.setState(
                        { 
                            nome: user[0].nome,
                            email: user[0].email,
                            avatarSource: user[0].imagem  
                        }
                    )
                })

        } 
    }

    screenWillFocus() {
        StatusBar.setTranslucent(false)
    }

    onPicker() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                //const source = { uri: response.uri };

                // You can also display the image using data:
                const source = `data:image/jpeg;base64,${response.data}`

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    onLogout() {
        firebase.auth().signOut()
            .then(this.props.navigation.navigate('LoginScreen'))
            .catch(error => alert(error.mmessage))
    }

    createOrUpdateUser(){
        const user = firebase.auth().currentUser 
        if (user) {
            if (this.state.senha !== '') {
                user.updatePassword(this.state.senha)
                    .then(this.props.navigation.navigate('FeedScreen'))
                    .catch(erro => alert(erro))
            }
            this.userService.updatePhoto(user.uid, {
                imagem: this.state.avatarSource,
                nome: this.state.nome,
                email: this.state.email
            }).then(resp => alert("Foto alterada"))
        } 
        else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
                .then((usuarioCriado) => {
                        this.userService.create({
                            id: usuarioCriado.user.uid,
                            nome: this.state.nome,
                            email: this.state.email,
                            senha: this.state.senha,
                            imagem: this.state.avatarSource
                        })
                        .then(console.log("Criado usuario no banco"))
                        .catch(err => alert(`Falha ao criar usuário no BD. ${err}`))
                })
                .then(this.props.navigation.navigate('RootTabBar'))
                .catch(erro => alert(erro.message))
            }
    }

    render() {
        const user = firebase.auth().currentUser
        return (
            <KeyboardAvoidingView
                style={styles.conteinerProfile} 
                behavior="padding" enabled>                
                
                <View style={styles.box}>
                    <TouchableOpacity style={styles.iconBox} onPress={this.onPicker}>
                        {this.state.avatarSource === null ? 
                            <CoIcon 
                                name={'user'} 
                                style={styles.iconFont} 
                            />
                            :
                            <Image source={{uri : this.state.avatarSource}} style={styles.image} />                        
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.inputsBox}>
                    <TextInput 
                        style={styles.inputProfile} 
                        placeholder={'Nome'} 
                        placeholderTextColor={'white'} 
                        value={this.state.nome}
                        onChangeText={
                            (nome) => this.setState({ ...this.state, nome })
                        }
                    />
                    <TextInput 
                        style={styles.inputProfile} 
                        placeholder={'E-mail'} 
                        placeholderTextColor={'white'} 
                        value={this.state.email}
                        editable={user ? false : true}
                        onChangeText={
                            (email) => this.setState({ ...this.state, email })
                        }
                    />
                    <TextInput 
                        style={styles.inputProfile} 
                        placeholder={user ? 'Nova Senha' : 'Senha' } 
                        placeholderTextColor={'white'} 
                        onChangeText={(senha) => this.setState({ ...this.state, senha })}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.createOrUpdateUser}
                    >
                        <Text style={styles.textButton}>{firebase.auth().currentUser ? 'Salvar' : 'Cadastrar'}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
