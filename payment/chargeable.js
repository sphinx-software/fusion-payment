/**
 * @interface
 */
class Chargeable {

    async getPrice() {
        throw new Error('Not Implemented');
    }

    async getBill() {
        throw new Error('Not Implemented');
    }

}

module.exports = Chargeable;