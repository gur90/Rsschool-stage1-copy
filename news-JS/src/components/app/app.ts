import AppController from '../../components/controller/controller';
import { AppView } from '../../components/view/appView';

class App {
    controller = AppController
     view = AppView
    
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void  {
        (document
            .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data); alert(data));
        
    }
}

export default App;
