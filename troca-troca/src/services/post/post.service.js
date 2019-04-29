import { Platform } from 'react-native'
import { BaseService } from '@service'

export class PostService extends BaseService {
    constructor() {
        super("https://trocatroca-db.herokuapp.com/")
    }

    getAll(limit = 30) {
        return super.get(`anuncios?_limit=${limit}`)
    }

    getByCategoria(categoriaId) {
        return super.get(`anuncios?categoriaId=${categoriaId}`)
    }

    getByIdAnuncio(id) {
        return super.get(`anuncios?id=${id}`)
    }

    getByIdAnuncioUsuarioId(id, usuarioId) {
        return super.get(`anuncios?id=${id}&usuarioId=${usuarioId}`)
    }

    create(post) {
        return super.post(`anuncios`, post)
    }

}
