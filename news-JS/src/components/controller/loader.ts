import {Api} from '../../types/interfaces'
type Option = Record<string, string>
class Loader {
    baseLink: string
    options: {apiKey?: string} 
    constructor(baseLink: string, options:  {apiKey?: string}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp <T>(
        { endpoint, options = {} }: {endpoint:string, options?: Record<string, string>},
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res:Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Record<string, string>, endpoint= '') {
        const urlOptions: {[key:string]: string} = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: 'GET' | 'POST', endpoint: string, callback: (data: JSON)=>void,options ={}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
