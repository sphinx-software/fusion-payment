/**
 * @implements Payment
 */

class BraintreePayment {
    constructor(braintree) {
        this.braintree = braintree;
        this.gateway   = null;
    }

    async connect(connection) {
        this.gateway = await this.braintree.connect({
            environment: this.braintree.Environment.Sandbox,
            merchantId : connection.merchantId,
            publicKey  : connection.publicKey,
            privateKey : connection.privateKey
        });
        return this;
    }

    async charge(item) {
        this.gateway.transaction.sale({
            amount            : item.amount,
            paymentMethodNonce: item.paymentMethodNonce,
            options           : {
                submitForSettlement: item.options.submitForSettlement
            }
        }, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }

            if (result.success) {
                console.log('Transaction ID: ' + result.transaction.id);
            } else {
                console.error(result.message);
            }
        });

    }

    async subscribe(plan) {

        this.gateway.subscription.create({
            paymentMethodToken: plan.paymentMethodToken,
            planId            : plan.planId,
            merchantAccountId : plan.merchantAccountId
        }, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }

            if (result.success) {
                console.log('Subscription ID: ' + result.subscription.id);
            } else {
                console.error(result.message);
            }
        })
    }
}

module.exports = BraintreePayment;