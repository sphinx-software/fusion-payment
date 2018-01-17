const braintree = require('braintree');
const stripe    = require("stripe");

const BraintreePayment = require('./payment/braintree/braintree-payment');
const StripePayment = require('./payment/stripe/stripe-payment');

exports.register = (container) => {
    container.singleton('payment', async () => {
        let config = await container.make('config');

        let client = config.payment.client;

        if ('braintree' === client) {

            return new BraintreePayment(braintree).connect(config.payment.connection);

        } else if ('stripe' === client) {
            // let stripe = stripe(config.payment.secretKey);
            // return new StripePayment(stripe);

        } else {
            // throw error
        }


    });
};

exports.boot = async (container) => {
    await container.make('payment');
};
