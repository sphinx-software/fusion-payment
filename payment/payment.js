const Bill = require('./bill');

/**
 * Payment of item or plan
 * @interface
 */
class Payment {

    /**
     * @param {Chargeable} item
     * @return {Bill}
     */
    charge(item) {
        //todo get parameter for bill
        return new Bill();
    }

    /**
     * @param {Planable} plan
     * @return {Bill}
     */

    subscribe(plan) {
        // todo get parameter for ll
        return new Bill();
    }

}

module.exports = Payment;
