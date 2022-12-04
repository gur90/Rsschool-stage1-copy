/*import { Card } from "../types/interfaces";

const productsBtn = document.querySelectorAll('.btn-add');
const cartProductsList = document.querySelectorAll('.cart-content-list');
const cart = document.querySelectorAll('.cart');
const cartCount = document.querySelectorAll('.count');
const fullPrice = document.querySelectorAll('.fullprice');
let price:number = 0;
console.log('9')
const randomId = ()=> {
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
}
const priceWithoutSpaces = (str)=> {
    return str.replace(/\s/g, '');
}
const normalPrice = (str)=> {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1')
}
const plusFullPrice = (currentPrice) => {
    return price +=currentPrice;
}
const minusFullPrice = (currentPrice)=>{
    return price -=currentPrice;
}
const printFullPrice = ()=> {
    fullPrice.textContent = `${normalPrice(price)} $`;
}
const printCount = ()=> {
    let length = cartProductsList.length
    cartCount.textContent = length
}
const generateCartProducts = (img, title, price, id) => {
    return `
    <li class="cart-content-item">
    <article class="cart-content-product" data-id="${id}">
        <img src="${img}" alt="landscaping" class="cart-product-img">
        <div class="cart-product-text">
            <h3 class="cart-product-title">${title}</h3>
            <span class="cart-product price">${price}</span>
        </div>
        <button class="cart-product-delete" aria-label="delete"></button>
    </article>
</li>
    `;
}
productsBtn.forEach(el => {
    //el.closest('.content-good').getAttribute('data-id')
    //console.log('data-id')
    el.addEventListener('click', (e)=>{

        let self = e.currentTarget;
        console.log(self)
        let parent = self.closest('.good-wrapper');
        let id = parent.dataset.id;
        let img = parent.querySelector('.good-image-img').getAttribute('src')
        let title = parent.querySelector('.good-title').textContent;
        
       
        const priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.good-price').textContent));

        plusFullPrice(priceNumber);
        printFullPrice();
        cartProductsList.insertAdjacentHTML('afterbegin', generateCartProducts(img, title, price, id))
        printCount()
        self.disabled = true
    })
})*/