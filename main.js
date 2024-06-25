import './style.css'
var products = [
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/fe0b1a25-65c8-4051-88be-4897bff884ed.jpg?ts=1711472717', name: 'Banana Robusta Regular - 3 pieces', price: '15', quantity: '3 pieces', delTime: '13 min' ,type:'fruit'},
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/31930943-a4dd-446c-a960-277e4f7b193e.jpg?ts=1711443009', name: 'Green Grapes (Fresh)-Regular', price: '25', quantity: '300g', delTime: '10 min' ,type:'fruit'  }, 
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a06cb8a4-e5d9-4136-a6a9-1ef09a2bb96b.jpg?ts=1711473009', name: 'Pomegranate(Anaar)-Regular', price: '215', quantity: '1 kg', delTime: '13 min',type:'fruit' }, 
    
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a891fa4e-b88a-4e68-bde6-d4314edb0d81.jpg?ts=1714120699', name: 'Muskmellon - (Organically Grown)', price: '245', quantity: '1 kg', delTime: '13 min' ,type:'fruit' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3577b207-70ff-4277-bd3a-c90e646f152b.jpg?ts=1714120705', name: 'Premium Pomegranate Organic(Anaar)', price: '205', quantity: '1 kg', delTime: '13 min' ,type:'fruit' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/33ef0601-859e-45de-94ae-7880bec66ec5.jpg?ts=1711440872', name: 'Sugarcane Stick (organic) Regular', price: '100', quantity: '3 Pieces', delTime: '13 min' ,type:'fruit' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a01d4f6f-bc45-44d7-8465-5f0a48d4a09c.jpg?ts=1710753443', name: 'Sweet Lime (Mosambi) - Economy', price: '85', quantity: '400g', delTime: '13 min' ,type:'fruit' } , 
    
    //dairy
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913', name: 'Mother dairy Cow Fresh Milk', price: '25', quantity: '300g', delTime: '10 min' , type:'dairy' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/349944a.jpg?ts=1690815133', name: 'Mother Dairy Toned Fresh Milk', price: '25', quantity: '300g', delTime: '10 min' , type:'dairy' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2d037337-0ca2-463c-9f98-a6cba298d7a5.jpg?ts=1707312317', name: 'Amul Frsh Paneer', price: '25', quantity: '300g', delTime: '10 min' , type:'dairy' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/521720a.jpg?ts=1690829789', name: 'Mother Dairy Diets Kesar Ice Cream', price: '25', quantity: '300g', delTime: '10 min' , type:'dairy' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/18618a.jpg?ts=1698063512', name: 'Mother Dairy Buffalo Ghee', price: '25', quantity: '300g', delTime: '10 min' , type:'dairy' },

    //grocery

    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3a474f33-1b7e-4703-8dbc-37fa7cab0322.jpg?ts=1713777273', name: 'Whole Farm Grocery Raisins', price: '85', quantity: '400g', delTime: '13 min' , type:'grocery' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c31fb8e9-9ea3-47b3-9569-4ab5f1757edf.jpg?ts=1716957027', name: 'Whole Farm Rich Thick Poha', price: '80', quantity: '400g', delTime: '13 min' , type:'grocery' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/48beaa71-dd4b-4414-81cd-3b21211d9a88.jpg?ts=1710499638', name: 'Just Organik Organic Red Rajma', price: '85', quantity: '400g', delTime: '13 min' , type:'grocery' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2ac07095-b709-44a2-8fe1-fd511a69320b.jpg?ts=1712825584', name: 'Tata Sampann Unpolished Yellow Moong Daal', price: '85', quantity: '400g', delTime: '13 min' , type:'grocery' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3c3aa57a-74ae-4666-9b36-cc6cf29552f9.jpg?ts=1713777005', name: 'Rajdhani Chana Daal', price: '85', quantity: '400g', delTime: '13 min' , type:'grocery' }

    //essentials

    ,
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/779fc605-8b54-4d48-9ed6-3905107a1cb2.jpg', name: 'Nayasa Gloria Plastic Multipurpose Basket', price: '145', quantity: '1 unit', delTime: '13 min',type:'essential' },,
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/fb2d73be-1c41-46ac-8323-a619a195e5c3.jpg?ts=1705928144', name: 'Happy Kitchen Tea stainless stell strainer', price: '145', quantity: '1 unit', delTime: '13 min',type:'essential' },,
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4801f083-69ba-4001-a36d-e5fc2aeb31f2.jpg', name: 'Quba Automatic Soap Dispenser', price: '145', quantity: '500g', delTime: '13 min',type:'essential' },,
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/536385a.jpg', name: 'PrettyKrafts  75L black Laundary Basket', price: '145', quantity: '1 unit', delTime: '13 min',type:'essential' },,
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5413019b-f7da-499b-87d4-ec11be095fc4.jpg?ts=1708250999', name: 'Nayasa Bubble Soap Dispenser', price: '145', quantity: '500g', delTime: '13 min',type:'essential' },

    //vegetables

    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/28b248cd-5f36-413d-b5d5-5f867cfdb762.jpg?ts=1711016008', name: 'Lady Finger Bhindi (bhindi)', price: '40', quantity: '400g', delTime: '13 min' , type:'vegetable' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80aaa2e4-c2ef-42f8-b588-a36eebf9bb33.jpg?ts=1711694426', name: 'Bottle Gaurd (Lauki)', price: '25', quantity: ' 400g', delTime: '13 min' , type:'vegetable' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0c0170fb-baf2-4947-b512-a6f0a5e6ad01.jpg?ts=1711024455', name: 'Green Capsicum (Shimla Mirch)', price: '100', quantity: '400g', delTime: '13 min' , type:'vegetable' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0074b9f6-c141-44b0-a00c-0278d5d315ca.jpg?ts=1711473366', name: 'Potato (Aloo)', price: '70', quantity: '400g', delTime: '13 min' , type:'vegetable' },
    { imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4f10087e-205a-4756-baf3-6b01efaf6762.jpg?ts=1711023329', name: 'Sponge Gaurd (Tori)', price: '50', quantity: '400g', delTime: '13 min' , type:'vegetable' },
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

function removeFromCart(index) { 
    cartCount--;
    cartItems.splice(index, 1);
    document.querySelector('.cart-button').innerHTML = `<i class="fa-solid fa-cart-shopping"></i>My Cart (${cartCount})`;
    renderCartItems();
}

function renderCartItems(){
    var totalPrice = 0;
    var cartHtml = cartItems.map(function(item , index){
        totalPrice += parseFloat(item.price);
        return  `<div class="cart-item">
        <div class="cart-img-box"><img src="${item.imageUrl}" alt=""></div>
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-quantity">${item.quantity}</p>
        <div class="cart-price"><i class="fa-solid fa-indian-rupee-sign"></i>${item.price}</div>
        <button class="remove" data-index="${index}">Remove</button>
    </div>`;
    }).join('');
    cartHtml += `<div class="cart_total">
    <h4>Total Price: <i class="fa-solid fa-indian-rupee-sign"></i>${totalPrice}</h4>
    </div>`
    document.querySelector('#cartItems').innerHTML = cartHtml;

    document.querySelectorAll('.remove').forEach(function(button) { 
        button.addEventListener('click', function() {
            var index = button.getAttribute('data-index');
            removeFromCart(index);
        });
    });
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

