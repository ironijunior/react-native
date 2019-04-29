import axios from 'axios'

const httpClient = baseURL => axios.create({
    timeout: 30000,
    headers: {
        'Content-type': 'application/json'
    },
    baseURL
})

export class BaseService {

    constructor(baseUrl) {
        this.client = httpClient(baseUrl)
    }

    get(url) {
        return this.client
            .get(url)
            .then(result => result.data)
            .catch(err => console.log(err))
    }

    post(url, value) {
        return this.client
            .post(url, value)
            .then(result => result.data)
            .catch(err => console.log(err))
    }

    update(url, value) {
        return this.client
            .put(url, value)
            .then(result => result.data)
            .catch(err => console.log(err))
    }

    delete(url) {
        return this.client
            .delete(url)
            .then(result => result.data)
            .catch(err => console.log(err))
    }
}