import React, { Fragment } from 'react'
import { KeyboardAvoidingView, Image, TouchableOpacity, View, Text, TextInput, StatusBar } from 'react-native'
import { BaseScreen } from '@ui/screens/base'
import { NavigationActions } from 'react-navigation'

import firebase from 'react-native-firebase'

import { styles, dime } from './camera.style'

import { CoIcon } from '@ui/components/CoIcon'
import { CoPicker } from '@ui/components/CoPicker'
import { CameraModal } from '@ui/screens/modal/camera'

import { StorageService, PostService, CategoriaService } from '@service'
import { FEED_ROUTES } from '@ui/navigator/routes/feed';

const LinearGradient = require('react-native-linear-gradient').default;

var RNFS = require('react-native-fs')

export class CameraScreen extends BaseScreen {

    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title')

        return {
            title: title,
            headerTransparent: true,
            headerRight:
                <TouchableOpacity onPress={navigation.getParam('_onDismiss')}>
                    <CoIcon name='right-arrow' style={{ color: 'black', fontSize: 24, paddingRight: 10 }} />
                </TouchableOpacity>
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            currentUserId: firebase.auth().currentUser.uid,
            modalVisible: false,
            photo: null,
            descricao: '',
            valor: '',
            categoriasAtivas: [],
            categoriaSelecionada: ''
        };

        this.postService = new PostService()
        this.categoriaService = new CategoriaService()

        this._onDismiss = this._onDismiss.bind(this)
        this.onPhotoTook = this.onPhotoTook.bind(this)
    }

    _onDismiss() {
        const backAction = NavigationActions.back()
        this.props.navigation.dispatch(backAction)
    }

    componentDidMount() {
        super.componentDidMount()

        this.props.navigation.setParams({
            _onDismiss: this._onDismiss
        })

        let categorias = []
        this.categoriaService.getAllAtivas()
            .then(categoriasAtivas => {
                categoriasAtivas.forEach(cat => {
                    categorias.push({
                        label: cat.nome,
                        valor: cat.id
                    })
                })
                this.setState({...this.state, categoriasAtivas: categorias })
            })
    }

    screenWillFocus() {
        StatusBar.setTranslucent(false)
        if (this.state.photo !== null && this.state.photo !== 'undefined') {
            this.setState({ ...this.state, modalVisible: false })
        } else {
            this.setState({ ...this.state, modalVisible: true })
        }
    }

    onPhotoTook = async (photoPath) => {
        StorageService.remove('photo-camera')

        let photo = await RNFS.readFile(photoPath, "base64")

        this.setState({ ...this.state, 
            modalVisible: false, 
            photo: `data:image/jpeg;base64,${photo}` 
        })
    }

    informacoesValidas = () => {
        if(this.state.descricao === '') {
            alert("Descrição precisa ser informada")
            return false
        }

        if(this.state.valor === '') {
            alert("Valor precisa ser informado")
            return false
        }

        if(this.state.photo === '') {
            alert("Não existe uma imagem para o anúncio")
            return false
        }

        if(this.state.categoriaSelecionada === '') {
            alert("Uma categoria precisa ser informada")
            return false
        }

        return true
    }

    _onGravarClick = () => {
        if(this.informacoesValidas()) {
            let newpost = {
                usuarioId: this.state.currentUserId,
                createdAt: new Date(),
                descricao: this.state.descricao,
                imagem: this.state.photo,
                valor: this.state.valor,
                categoriaId: this.state.categoriaSelecionada,
                local: "Sem local",
                ativa: true
            }
    
            this.postService.create(newpost)
                .then(resp => {
                    this.props.navigation.navigate(FEED_ROUTES.FEED)
                    alert(`Post criado com sucesso!`)
                })
        }
    }

    _onCancelarClick = () => {
        this.setState({
            modalVisible: false,
            photo: null,
            descricao: '',
            valor: ''
        })
        this.props.navigation.navigate(FEED_ROUTES.FEED)
    }

    _getCategoriaSelecionada = (categoria, index) => {
        this.setState({ ...this.state, categoriaSelecionada: categoria })
        
        if(categoria === null) {
            this.postService.getAll().then(posts => {
                this.setState({ posts })
            })
        } else {
            this.postService.getByCategoria(categoria).then(posts => {
                this.setState({ posts })
            })
        }
    }

    renderContent() {
        return (
            <Fragment>
                <CameraModal onPhotoTook={this.onPhotoTook} visible={this.state.modalVisible} />

                <KeyboardAvoidingView style={styles.container}>

                    <Image style={styles.imagePreview} 
                        source={{ uri: this.state.photo }} />

                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                        placeholder={'Descrição'} 
                        placeholderTextColor={'#05C3DE'} 
                        numberOfLines={4}
                        onChangeText={(descricao) => this.setState({descricao})}
                        value={this.state.descricao} />

                    <TextInput
                        style={styles.textInput}
                        multiline={false}
                        placeholder={'Valor'} 
                        placeholderTextColor={'#05C3DE'} 
                        onChangeText={(valor) => this.setState({valor})}
                        value={this.state.valor} />

                    <CoPicker 
                        styles={ styles.categoriaPicker }
                        labelTodos="Categorias"
                        onValueChange={ this._getCategoriaSelecionada }
                        valorSelecionado={ this.state.categoriaSelecionada }
                        valores={ this.state.categoriasAtivas }
                    />

                    <View style={styles.buttonContainer}>
                        

                        <TouchableOpacity onPress={this._onCancelarClick}
                            style={styles.button}>
                            <LinearGradient
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                colors={['#F55700', '#E42E57']}
                                style={{
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    borderRadius: 5, 
                                    flex: 1
                                }}>
                                <Text style={styles.textButton}>Cancelar</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._onGravarClick}
                            style={styles.button}>
                            <LinearGradient
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                colors={['#1FDDAD', '#05C3DE']}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    flex: 1
                                }}>
                                <Text style={styles.textButton}>Gravar</Text>
                            </LinearGradient>
                            
                        </TouchableOpacity>

                    </View>
                </KeyboardAvoidingView>
            </Fragment>
        )
    }
}