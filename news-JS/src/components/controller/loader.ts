//import {Api, Everything} from '../../types/interfaces'
//type Option = Record<string, string>
class Loader {
    baseLink: string
    options: {apiKey?: string} 
    constructor(baseLink: string, options:  {apiKey?: string}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T> (
        { endpoint, options = {} }: {endpoint:string, options?: Record<string, string>},
         callback :  (data:T )=> void =()=> {
            console.error('No callback for GET response');
        }
    ) {
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

    load<T>(method: 'GET' | 'POST', endpoint: string, callback: (data: T)=>void,options ={}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res): Promise<T> => res.json())
            .then((data: T):void => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
