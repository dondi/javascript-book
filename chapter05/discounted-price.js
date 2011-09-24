/*
 * Returns the price of an item after applying a discount.
 */
var discountedPrice = function (originalPrice, discountPercent) {
    return originalPrice - (originalPrice * discountPercent / 100.0);
};
