import Vue from 'vue';

Vue.filter('toMoney', (value) => {
    if (typeof value !== "number") {
        return value;
    }
    const formatter = new Intl.NumberFormat('de-CH', {
        style: 'currency',
        currency: 'CHF',
        minimumFractionDigits: 2
    });
    return formatter.format(value);
});