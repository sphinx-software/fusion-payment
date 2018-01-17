/**
 * Bill of item or plan
 */
class Bill {

    /**
     *
     * @param token
     * @param email
     * @param buyerId
     */
    constructor(token, email, buyerId) {
        this.token = token;
        this.email = email;
        this.buyerId = buyerId;
    }


}

module.exports = Bill;
