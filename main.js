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

//services
var companyTab = document.getElementById('company');
var companyOptions = document.querySelector('.company');
//dropdown
function dropdown3() {
  companyOptions.classList.add('show-menu');
}
companyTab.addEventListener('mouseover', dropdown3);
//dissappear
function dissapear3() {
  companyOptions.classList.remove('show-menu');
}
company.addEventListener('mouseleave', dissapear3);
