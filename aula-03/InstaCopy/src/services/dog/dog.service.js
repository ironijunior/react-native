import { BaseService } from '@service/base'

export class DogService extends BaseService {
    constructor() {
        super("https://dog.ceo/api/")
    }

    getRandomImage(qtd = 1) {
        return super.get(`breeds/image/random/${qtd}`);
    }
}