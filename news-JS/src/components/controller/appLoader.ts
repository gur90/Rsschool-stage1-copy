import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'd7d3184b18c44f229c1cedde435628ce', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
