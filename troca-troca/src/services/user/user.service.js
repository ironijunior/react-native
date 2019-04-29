import { Platform } from 'react-native'
import { BaseService } from '@service'

export class UserService extends BaseService {
    constructor() {
        super("https://trocatroca-db.herokuapp.com/")
    }

    getAll() {
        return super.get("usuarios")
    }

    getById(id) {
        return super.get(`usuarios/${id}`)
    }

    getByEmail(email) {
        return super.get(`usuarios?email=${email}`)
    }

    create(usuario) {
        return super.post('usuarios', usuario)
    }

    updatePhoto(idUsuario, objeto) {
        return super.update(`usuarios/${idUsuario}`, objeto)
    }
}
