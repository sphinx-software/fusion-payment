/**
 * @interface
 */
class Planable {

    async getPrice() {
        throw new Error('Not Implemented');
    }

    async getBill() {
        throw new Error('Not Implemented');
    }

}

module.exports = Planable;