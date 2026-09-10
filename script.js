//initial value
let cartItemsCount = 0;

//update counter
function updateCartNumber() {
    const cartNumber = document.querySelector('.cart-count');
    cartNumber.textContent = cartItemsCount;
}

//add to cart
function addItemToCart(productName) {
    cartItemsCount = cartItemsCount + 1;
    updateCartNumber();
    showNotification(productName + ' added to cart!');
}
//show message to user
function showNotification(message) {
    alert(message);
}

//when you upload the page
document.addEventListener('DOMContentLoaded', function() {
    
//when you click btn add bring prouduct name and call addToCart function
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            addItemToCart(productName);
        });
    });
 //show message when you click on cart icon   
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', function() {
            alert('You have ' + cartItemsCount + ' items in cart');
        }
    );
});