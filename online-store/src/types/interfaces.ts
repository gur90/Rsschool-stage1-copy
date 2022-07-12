/*interface ICard {
    generateCard: () => HTMLElement;
}
export class Card implements ICard {
    name: string;
    id: string;
    imgUrl: string;
    price: string;
    color: string;
    constructor({id, name, imgUrl, price, color}: {
        name: string;
        id: string;
        imgUrl: string;
        price: string;
       color: string
    }) {
        this.name= name,
        this.id = id,
        this.imgUrl=imgUrl,
        this.price = price,
      this.color = color

    }

generateCard () {
    let image = '';
    let button = '';
    const card: HTMLElement = this.createNode('div', 'content-good');
    card.setAttribute('name', this.name);
    card.setAttribute('data-id', this.id);
     const cardWrapper: HTMLElement = this.createNode('div', 'good-wrapper');
     const imageWrapper : HTMLElement = this.createNode('div', 'good-image');

     this.imgUrl && (image = `<img src = ${this.imgUrl} alt = "decor">`);
     imageWrapper.innerHTML = image;
     const description: HTMLElement = this.createNode('div', 'container');
     const title: HTMLElement = this.createNode('h2', 'good-title');
    title.innerHTML = `${this.name} ${this.color}`;
    const price: HTMLElement = this.createNode('div', 'good-price');
    price.innerHTML = `$${this.price}`;
    const buttonWrapper = this.createNode('div'. 'good-actions');
    button = `<button class = "btn-add">Buy</button>`;
    buttonWrapper.innerHTML = button;
    description.append(title, price, buttonWrapper);
    cardWrapper.append(imageWrapper, description);
    card.append(cardWrapper);
    return card
}
createNode(node: SVGFESpecularLightingElement, className:string) {
    const el = document.createElement(node) as HTMLElement;
    el.className = className;
    return el
}
}
window.onload = function ():void {
    const productCards = new Cards();
    if(products) {
        productCards.renderCardToDom()
    }
}*/