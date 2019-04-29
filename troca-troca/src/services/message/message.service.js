import { BaseService } from '@service'

export class MessageService extends BaseService {
    constructor() {
        super("https://trocatroca-db.herokuapp.com/")
    }

    getByAnuncioDonoInteressado(anuncioId, idDono, idInteressado) {
        return super.get(`mensagens?anuncioId=${anuncioId}&usuarioDonoAnuncio=${idDono}&usuarioInteressadoId=${idInteressado}`)
    }

    adicionarMensagem(conversaId, anuncioId, idDono, idInteressado, mensagens) {
        let obj = {
            "anuncioId": anuncioId,
            "usuarioDonoAnuncio": idDono,
            "usuarioInteressadoId": idInteressado,
            "mensagens": mensagens
        }
        if (conversaId == 'undefined' || conversaId === null) {
            return super.post(`mensagens`, obj)
        }
        return super.update(`mensagens/${conversaId}`, obj)
    }

    getByUsuarioInteressadoId(id) {
        return super.get(`mensagens?usuarioInteressadoId=${id}`)
    }

    getByUsuarioDonoAnuncio(idDono) {
        return super.get(`mensagens?usuarioDonoAnuncio=${idDono}`)
    }

}
