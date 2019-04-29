import { Platform } from 'react-native'
import { BaseService } from '@service'

export class LoginService extends BaseService {
    constructor() {
        super("https://trocatroca-db.herokuapp.com/")
    }

    getUser(email) {
        return super.get(`usuarios?email=${email}`)
    }

}