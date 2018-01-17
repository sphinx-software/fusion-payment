/**
 * @implements Payment
 */

class StripePayment {
    constructor(stripe) {
        this.stripe = stripe;
    }

    async charge(item) {
        this.stripe.charges.create({
            amount     : item.amount,
            currency   : item.currency,
            source     : item.source, // obtained with Stripe.js
            description: item.description
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
        this.stripe.subscriptions.create({
                customer: plan.customer,
                items   : [
                    {
                        plan: plan.name,
                    },
                ]
            }, (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (result.success) {
                    console.log('Transaction ID: ' + result.subscriptions.id);
                } else {
                    console.error(result.message);
                }
            }
        );

    }
}

