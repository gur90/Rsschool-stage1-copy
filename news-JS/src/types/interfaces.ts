//import Sources from "../components/view/sources/sources"

export interface Api {
   status:string
   sources: Source[]

}
export interface Source {
    id: string
    name: string
    description: string
    url: string
    category: string
    language: string
    country: string
}
export interface SourceArt {
    //articles: string[];
    status:string;
    totalResults: number;
    articles: Array<Inews>
    
} 
export interface Inews {
    source: Source
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}
export const enum Status {
    ok = 0,
    error = 1,
}

export type Everything = {
    readonly status: string;
    totalResults: number;
    articles: Array<Inews>;
    sources?: Array<Source>;
};
