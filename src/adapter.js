class Adapter {
    constructor(portUrl) {
        const FRONTEND_URL = portUrl + '/toys/'
        this.getToy = (toyId) => {
            // Do a thing
            return fetch(FRONTEND_URL + toyId);
        };
        this.getAllToys = () => {
            return fetch(FRONTEND_URL)
        }
        this.postNewToy = (toyData) => {
            return fetch(FRONTEND_URL, {
                method: 'POST',
                body: JSON.stringify(toyData),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
        }
    }   
}