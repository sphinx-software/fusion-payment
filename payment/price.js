/**
 * Price of item or plan
 */
class Price {
    /**
     *
     * @param amount
     * @param currencies
     */
    constructor(amount, currencies) {
        this.amount     = amount;
        this.currencies = currencies;
    }

    /**
     *
     * @return {string} amount
     */
    getAmount() {
        return this.amount;
    }

    /**
     *
     * @return {number} currencies
     */
    getCurrencies() {
        return this.currencies;
    }

}

module.exports = Price;
