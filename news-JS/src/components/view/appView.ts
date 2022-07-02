import News from './news/news';
import Sources from './sources/sources';
import {Api, Source, SourceArt, Inews} from '../../types/interfaces';

export class AppView {
    news: News
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: SourceArt): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Api ): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
