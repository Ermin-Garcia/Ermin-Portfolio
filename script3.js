const big = document.querySelector('#big-img');
const small = document.querySelector('.small-img')
const small1 = document.querySelector('.small-img1');
const small2 = document.querySelector('.small-img2');
const big1 = document.querySelector('#big1-img');
const sm1 = document.querySelector('.small1-img')
const sm2 = document.querySelector('.small2-img');
const sm3 = document.querySelector('.small3-img');
const color = document.querySelector('.color');
const color1 = document.querySelector('.color1');
const price = document.querySelector('.price');
const price1 = document.querySelector('.price1');
const buy = document.querySelector('#buy-btn');
const form = document.querySelector('.form');
const ex = document.querySelector('.exit-btn');
const product = document.querySelector('.product-img');
const shoes = document.querySelector('.shoes');
const product1 = document.querySelector('.product1-img');
const jacket = document.querySelector('.jacket');

shoes.addEventListener('click', () => {
    product.style.display = ('block');
    product1.style.display = ('none');  
})
jacket.addEventListener('click', () => {
    product1.style.display = ('block'); 
    product.style.display = ('none');  
})

//shoes img
small.addEventListener('click', () => {
    big.src = ('images/project3/shoe1.jpg');   
    color.style.color = ('green') 
    color.textContent = ('Green Shoes');
    price.textContent = ('$ 111.01');
    
});
small1.addEventListener('click', () => {
    big.src = ('images/project3/shoe2.jpg');
    color.style.color = ('Red');
    color.textContent = ('Red Shoes'); 
    price.textContent = ('$ 222.02'); 
});
small2.addEventListener('click', () => {
    big.src = ('images/project3/shoe3.jpg');
    color.style.color = ('gray');
    color.textContent = ('Gray Shoes');  
    price.textContent = ('$ 333.03'); 
});

//jacket img
sm1.addEventListener('click', () => {
    big1.src = ('images/project3/jacket1.jpg');
    color1.style.color = ('orange');
    color1.textContent = ('Yellow Jacket');
    price1.textContent = ('$ 111.01');
});
sm2.addEventListener('click', () => {
    big1.src = ('images/project3/jacket2.jpg');
    color1.style.color = ('red');
    color1.textContent = ('Red Jacket');
    price1.textContent = ('$ 222.02'); 
});
sm3.addEventListener('click', () => {
    big1.src = ('images/project3/jacket3.jpg');
    color1.style.color = ('black');
    color1.textContent = ('Black Jacket'); 
    price1.textContent = ('$ 333.03');
});

//Form
buy.addEventListener('click', () => {
    form.style.display = ('flex'); 
})
ex.addEventListener('click', () => {
    form.style.display = ('none'); 
})