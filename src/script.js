const priceRange = document.querySelector('#price-range');
const monthlyBillingContainer = document.querySelector(
  '[data-monthly-billing]'
);
const viewCountCont = document.querySelector('[data-view-count-container]');
const priceContainer = document.querySelector('[data-price-container]')
const yearlyBillingContainer = document.querySelector('[data-yearly-billing]');
const switchButton = document.querySelector('[data-switch]');
const toogle = document.querySelector('[ data-toogle]');
const priceUnits = [8,12,16,24,36];
const viewUnits = ['10K','50K','100K','500K','1M']
priceRange.addEventListener('input',()=>{
  priceContainer.textContent = priceUnits[priceRange.value];
  viewCountCont.textContent = `${viewUnits[priceRange.value]} `;
})