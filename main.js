import './style.css'
var products = [
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/fe0b1a25-65c8-4051-88be-4897bff884ed.jpg?ts=1711472717', name: 'Banana Robusta Regular - 3 pieces', price: '15', quantity: '3 pieces', delTime: '13 min' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/31930943-a4dd-446c-a960-277e4f7b193e.jpg?ts=1711443009', name: 'Green Grapes (Fresh)-Regular', price: '25', quantity: '300g', delTime: '10 min' , type:'dairy' }, 
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a06cb8a4-e5d9-4136-a6a9-1ef09a2bb96b.jpg?ts=1711473009', name: 'Pomegranate(Anaar)-Regular', price: '215', quantity: '1 kg', delTime: '13 min',type:'fruit' }, 
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a01d4f6f-bc45-44d7-8465-5f0a48d4a09c.jpg?ts=1710753443', name: 'Sweet Lime (Mosambi) - Economy', price: '85', quantity: '400g', delTime: '13 min' , type:'grocery' }, 
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f752afad-18f2-4aac-a31d-a89c7ed1c03e.jpg?ts=1714120663', name: 'Alphonso Mango (Hapoos Aam)', price: '245', quantity: '32 pieces(300g - 400g)', delTime: '13 min' , type:'vegetable' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/25402dfe-1f1f-46d6-be58-7f0f8c3bcb01.jpg?ts=1711698876', name: 'Sindhoora Mango (Sindhuri Aam)', price: '145', quantity: '500g', delTime: '13 min',type:'essential' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a891fa4e-b88a-4e68-bde6-d4314edb0d81.jpg?ts=1714120699', name: 'Muskmellon - (Organically Grown)', price: '245', quantity: '1 kg', delTime: '13 min' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3577b207-70ff-4277-bd3a-c90e646f152b.jpg?ts=1714120705', name: 'Premium Pomegranate Organic(Anaar)', price: '205', quantity: '1 kg', delTime: '13 min' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/33ef0601-859e-45de-94ae-7880bec66ec5.jpg?ts=1711440872', name: 'Sugarcane Stick (organic) Regular', price: '100', quantity: '3 Pieces', delTime: '13 min' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a01d4f6f-bc45-44d7-8465-5f0a48d4a09c.jpg?ts=1710753443', name: 'Sweet Lime (Mosambi) - Economy', price: '85', quantity: '400g', delTime: '13 min' }
]

var cartCount = 0;
var cartItems = [];

function renderProducts(resultProducts) { 
    var productHtml = resultProducts.map(function (product) {
        return `<div class="fruit-container">
        <div class='img-box'><img src="${product.imageUrl}" alt=""></div>
        <div class="del-time"><img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png'>${product.delTime}</div>
        <h4 class="fruit-name">${product.name}</h4>
        <p class="quantity">${product.quantity}</p>
        <div class="price">
            <h5><i class="fa-solid fa-indian-rupee-sign"></i>${product.price}</h5>
            <button class="add"  item-name="${product.name}" item-quantity="${product.quantity}" item-price="${product.price}" item-imageUrl="${product.imageUrl}">ADD</button>
        </div>
        
    </div>`
    }).join('');
    document.querySelector('.productList').innerHTML = productHtml;
}


function searchProducts() {
    var searchText = document.querySelector('#searchInput').value;
    var filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchText.toLowerCase());
    })
    // if(searchText == ''){
        // renderProducts(products);
    // }else{
        renderProducts(filteredProducts);
    // };
}

document.querySelector('#searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
});

document.querySelector('#searchInput').addEventListener('input', function(event) {
    searchProducts();
});

document.querySelector('#searchBtn').addEventListener('click' , searchProducts);

function addToCart(name, quantity, price, imageUrl) {
    cartCount++;
    cartItems.push({ name, quantity:1, price, imageUrl });
    document.querySelector('.cart-button').innerHTML = `<i class="fa-solid fa-cart-shopping"></i>My Cart (${cartCount})`;
    renderCartItems();
}

function renderCartItems(){
    var totalPrice = 0;
    var cartHtml = cartItems.map(function(item){
        totalPrice += parseFloat(item.price);
        return  `<div class="cart-item">
        <div class="cart-img-box"><img src="${item.imageUrl}" alt=""></div>
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-quantity">${item.quantity}</p>
        <div class="cart-price"><i class="fa-solid fa-indian-rupee-sign"></i>${item.price}</div>
    </div>`;
    }).join('');
    cartHtml += `<div class="cart_total">
    <h4>Total Price: <i class="fa-solid fa-indian-rupee-sign"></i>${totalPrice}</h4>
    </div>`
    document.querySelector('#cartItems').innerHTML = cartHtml;
}

function showHideCart(){
    var cartBox = document.querySelector('#cartBox');
    if(cartBox.style.display === 'block'){
        cartBox.style.display = 'none'
    }else{
        cartBox.style.display = 'block'
    }
};

document.querySelector('#cartButton').addEventListener('click' , showHideCart);
document.querySelector('#closeCartButton').addEventListener('click' , showHideCart);


document.querySelector('#productList').addEventListener('click', function(event) {
    if (event.target.classList.contains('add')) {
        var button = event.target;
        var name = button.getAttribute('item-name');
        var quantity = button.getAttribute('item-quantity');
        var price = button.getAttribute('item-price');
        var imageUrl = button.getAttribute('item-imageUrl');
        addToCart(name, quantity, price, imageUrl);
        button.textContent = 'ADD (' + cartItems.filter(function(item) {
            return item.name === name;
        }).length + ')';
    }
    
});

document.querySelectorAll('.category-btn').forEach(function(button){
    button.addEventListener('click', function(event) {
        var category = event.target.getAttribute('data-category');
        var filteredProducts = products.filter(function(product) {
            return product.type === category;
        });
        renderProducts(filteredProducts);
    });
});



renderProducts(products);

