import products_list from "./products_database.js"; 

let cart=[];
let itemCount=0;

function displayProducts(product){
    const container=document.getElementById('product-container');
    container.innerHTML=''
    product.forEach(product => {
        const card=document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML=`
                <img src= ${product.image}>
                <h2>${product.name}</h2>
                <div class="price">Price - $${product.price}</div>
                <p>${product.description}</p>
                <button class="addtoCart-btn">Add to Cart</button>
        `;
        container.appendChild(card);

        card.querySelector('.addtoCart-btn').addEventListener('click', () =>{
            addToCart(product);
        })
    });
}

function addToCart(product){
    const countP=document.getElementById('count');
    const existingItem=cart.find(item => item.name===product.name);
    if(existingItem){
        existingItem.quantity+=1;
    }
    else{
        product.quantity=1;
        cart.push(product);
    }
    itemCount+=1;
    countP.innerHTML=itemCount;
    updateCartDisplay();
}

function updateCartDisplay(){
    const countP=document.getElementById('count');

    const container=document.getElementById('cart-items');

    container.innerHTML=`<h3>Your Cart</h3>`

    if(cart.length==0){
        container.innerHTML+=`
            <img id="sad-cake" src="assets/sad.png">
            <h2>Your cart is empty!</h2>
            <div class="div">Your cart is feeling as empty as a cake stand after a birthday party!</div>
            <div class="div">🍰 Time to sweeten it up!</div>`;
            itemCount=0;
    }
    else{
        let sum=0;
        cart.forEach((item,index )=>{
            const cartItem=document.createElement('div');
            cartItem.classList.add('cart-box');
            cartItem.innerHTML=`
            <img class="cart-img" src=${item.image}>
            <div class="col">
                <h3 class="item-name">${item.name}</h3>
                <div class="qty">
                <span class="left">-</span><span class="item-cost">${item.quantity}</span><span class="right">+</span>
                </div>
                <div class="item-price">$${item.price}</div>
            </div>
            <i class="fa-solid fa-trash" data-index="${index}"></i>
            `;
            sum+=item.price*item.quantity;
            container.appendChild(cartItem);

        })
        const totalPrice=document.createElement('div');
            totalPrice.setAttribute('id','checkout-div')
            totalPrice.innerHTML=`
            <div>Sub Total: $${sum}</div>
            <button>Checkout</button>
            `
            container.appendChild(totalPrice);   
    }

        const delItem=document.querySelectorAll('.fa-trash');
        delItem.forEach(icon=>{
            icon.addEventListener('click', (e) =>{
            const index= e.target.dataset.index;
            const itemToRemove=cart[index];
            itemCount-=itemToRemove.quantity;
            countP.innerHTML=itemCount;
            cart.splice(index,1);
            updateCartDisplay();
        })
    })   
}

displayProducts(products_list);

function filter(type){
    if(type==='All'){
        displayProducts(products_list);
    }
    else{
        const filterdProducts=products_list.filter(product => product.type===type);
        displayProducts(filterdProducts)
    }
}

document.getElementById('all').addEventListener('click', () => filter('All'));
document.getElementById('chocolate').addEventListener('click', () => filter('Chocolate'));
document.getElementById('vanilla').addEventListener('click', () => filter('Vanilla'));
document.getElementById('strawberry').addEventListener('click', () => filter('Strawberry'));
document.getElementById('special').addEventListener('click', () => filter('Special'));
document.getElementById('festive').addEventListener('click', () => filter('Festive'));


document.querySelector('.fa-cart-shopping').addEventListener('click', () =>{
    const cart=document.getElementById('cart-container');
    cart.classList.add('show');
    updateCartDisplay();

    const close=document.querySelector('.close-cart').addEventListener('click', () =>{
        cart.classList.remove('show');
        
        
    })
});

document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const icon = question.querySelector('i');

    question.addEventListener('click', () => {
        answer.classList.toggle('show');
        icon.classList.toggle('rotate'); // Optional: rotates the arrow

        // Toggle visibility of answer
        if (answer.classList.contains('show')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});   