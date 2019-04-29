import { BaseService } from '@service'

export class CategoriaService extends BaseService {
    constructor() {
        super("https://trocatroca-db.herokuapp.com/")
    }

    getAllAtivas() {
        return super.get(`categorias?ativa=${true}`)
    }  

}
