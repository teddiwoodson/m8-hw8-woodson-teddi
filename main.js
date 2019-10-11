// It is always helpful to use comments in your code!

//products
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


//services
var servicesTab = document.getElementById('services');
var servicesOptions = document.querySelector('.services');
//dropdown
function dropdown2() {
  servicesOptions.classList.add('show-menu');
}
servicesTab.addEventListener('mouseover', dropdown2);
//dissappear
function dissapear2() {
  servicesOptions.classList.remove('show-menu');
}
services.addEventListener('mouseleave', dissapear2);
