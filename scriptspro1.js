// script.js

// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Existing JavaScript (modify if necessary)
// Assuming your JavaScript is in a script.js file linked to your HTML

let cart = [];
const orders = [];

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.previousElementSibling.textContent;
        cart.push(product);
        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        cartItems.appendChild(div);
    });
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in the cart.</p>';
    }
}

// Buy Now functionality
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.previousElementSibling.previousElementSibling.textContent;
        const order = {
            product: product,
            status: 'Processing',
            shippedDate: new Date().toLocaleDateString(),
            arrivalDate: new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString(),
            address: '123 Main St, City, Country'
        };
        orders.push(order);
        updateOrders();
    });
});

function updateOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    orders.forEach(order => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>Product: ${order.product}</p>
            <p>Status: ${order.status}</p>
            <p>Shipped Date: ${order.shippedDate}</p>
            <p>Arrival Date: ${order.arrivalDate}</p>
            <p>Address: ${order.address}</p>
        `;
        orderList.appendChild(div);
    });
    if (orders.length === 0) {
        orderList.innerHTML = '<p>No orders placed yet.</p>';
    }
}
