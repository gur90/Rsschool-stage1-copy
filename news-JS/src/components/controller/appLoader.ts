import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd7d3184b18c44f229c1cedde435628ce', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
