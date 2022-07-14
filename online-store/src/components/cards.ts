import { Card } from "../types/interfaces";
import { products } from "./products";

window.onload = function ():void {
    const productCards = new Cards();
    if(products) {
        productCards.renderCardToDom()
    }
}
export class Cards {
    generateCard (data: typeof products): Card[]{
        const cards: Card[]=[];
        data.forEach(card=> {
            cards.push(new Card(card));
        })
        return cards
    }
    getWrapper():HTMLElement {
        const container = document.querySelector('#some-goods') as HTMLElement;
        container.innerHTML='';
        return container;
    }
    renderCardToDom(): void {
        const cardsWrapper = this.getWrapper();
        this.generateCard(products).forEach((card: Card):void => {
            cardsWrapper.append(card.generateCard());
        })
    }
}
