const priceRange = document.querySelector('#price-range');
const monthlyBillingContainer = document.querySelector(
  '[data-monthly-billing]'
);
const viewCountCont = document.querySelector('[data-view-count-container]');
const priceContainer = document.querySelector('[data-price-container]')
const yearlyBillingContainer = document.querySelector('[data-yearly-billing]');
const switchButton = document.querySelector('[data-switch]');
const toogle = document.querySelector('[ data-toogle]');
let initialPrice = 8;
let initialViewCount = 10;