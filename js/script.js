function addToLocalCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price: parseInt(price), quantity: 1, image });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  // Redirect to cart page
  window.location.href = "cart.html";
}


