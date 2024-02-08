const addToCartButton = document.querySelector('.add-to-cart');
const cartMessage = document.querySelector('.cart-message');

addToCartButton.addEventListener('click', () => {
  cartMessage.style.display = 'block'; // Show the 
});
// Get references to the relevant elements
const decreaseButton = document.querySelector('.decrease');
const increaseButton = document.querySelector('.increase');
const quantityInput = document.getElementById('quantity');

// Add event listeners to the buttons
decreaseButton.addEventListener('click', () => {
  decreaseQuantity();
});

increaseButton.addEventListener('click', () => {
  increaseQuantity();
});

// Function to decrease quantity
function decreaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

// Function to increase quantity
function increaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}