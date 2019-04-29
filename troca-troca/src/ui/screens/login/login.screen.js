import React from 'react'
import { 
    ImageBackground,
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView 
} from 'react-native'

import firebase from 'react-native-firebase'

import { PROFILE_ROUTES } from '@ui/navigator/routes/profile'

import { BaseScreen } from '@ui/screens/base';

import { styles } from './login.style';

import { LoginService } from '@service'
import { CoIcon } from '@ui/components/CoIcon';

export class LoginScreen extends BaseScreen {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
        }
        this.Login = this.Login.bind(this)
        this.SignUp = this.SignUp.bind(this)
        this.LoginService = new LoginService()
    }

    Login() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then(this.props.navigation.navigate('RootTabBar'))
            .catch(erro => alert(erro))
    }

    SignUp() {
        this.props.navigation.navigate(
            PROFILE_ROUTES.PROFILE, {
                title: 'Profile'
            }
        )
    }

    renderContent() {
        return (
            <ImageBackground source={require('../../../img/fundo.png')} style={styles.container} >
                <View style={styles.header} >
                    <CoIcon name={'handshake-o'} style={styles.logo} />
                </View>
                <KeyboardAvoidingView style={styles.signInForm} behavior="padding" enabled>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={(email) => this.setState({ email })}
                        placeholder="Email"
                        placeholderTextColor={'white'}
                        returnKeyType="next"
                    />
                    <TextInput
                        style={styles.inputText}
                        onChangeText={(senha) => this.setState({ senha })}
                        placeholder="Senha"
                        placeholderTextColor={'white'}
                        secureTextEntry={true}
                        returnKeyType="done"
                    />
                    <TouchableOpacity
                        style={styles.buttonSignIn}
                        onPress={this.Login}
                    >
                        <Text style={styles.textButton}>Sign In</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <View style={styles.footer} >
                    <TouchableOpacity
                        onPress={this.SignUp}
                    >
                        <Text style={styles.textDefault}>Não tem login? Clique aqui!</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}