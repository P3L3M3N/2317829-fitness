export const selectSubscriptionPrices = () => {
  const periodButtons = document.querySelectorAll('[data-subscription-period]');
  const subscriptionPrices = document.querySelectorAll('[data-subscription-price]');
  const shadowPrices = document.querySelectorAll('[data-subscription-price-shadow]');

  const pricesForPeriods = [
    [5000, 1700, 2700],
    [30000, 10200, 16200],
    [60000, 20400, 32400]
  ];

  periodButtons.forEach((periodButton, periodIndex) => {
    periodButton.addEventListener('click', () => {
      subscriptionPrices.forEach((priceElement, priceIndex) => {
        priceElement.textContent = pricesForPeriods[periodIndex][priceIndex].toString();
      });

      shadowPrices.forEach((shadowPriceElement, priceIndex) => {
        shadowPriceElement.textContent = pricesForPeriods[periodIndex][priceIndex].toString();
      });

      periodButtons.forEach((otherPeriodButton) => {
        otherPeriodButton.classList.remove('subscription__period-button--active');
      });
      periodButton.classList.add('subscription__period-button--active');
    });
  });
};
