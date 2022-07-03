import AppController from '../../components/controller/controller';
import { AppView } from '../../components/view/appView';
import {Everything, SourceArt} from '../../types/interfaces'

type ArticleType = {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type DataArticlesType = {
    status: string;
    totalResults: number;
    articles: ReadonlyArray<ArticleType>;
};

class App {
    controller: AppController;
     view: AppView
    
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void  {
        
        (document
            .querySelector('.sources') as HTMLDivElement)
            .addEventListener ('click', (e):void => this.controller.getNews(e, (data: Everything) => this.view.drawNews(data)));
        this.controller.getSources((data ) => this.view.drawSources(data));
  
    }
}

export default App;
