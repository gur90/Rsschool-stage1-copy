import Sources from "../components/view/sources/sources"

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
    articles: string[];
    status:string;
    totalResults: number
} 