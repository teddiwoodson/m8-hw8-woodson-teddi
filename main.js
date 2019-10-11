// It is always helpful to use comments in your code!
var productsTab = document.getElementById('products');
var productsOptions = document.querySelector('.products');
//dropdown
function dropdown() {
  productsOptions.classList.add('show-menu');
}
productsTab.addEventListener('mouseover', dropdown);
//dissappear
function dissapear() {
  productsOptions.classList.remove('show-menu');
}
productsTab.addEventListener('mouseleave', dissapear);
