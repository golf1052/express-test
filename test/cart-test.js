var chai = require('chai');
var expect = chai.expect;
var CartSummary = require('../src/cart-summary');

describe('CartSummary_2', function() {

    var cartSummary = new CartSummary([{
            id: 1,
            quantity: 4,
            price: 50
        }, {
            id: 2,
            quantity: 2,
            price: 30
        }, {
            id: 3,
            quantity: 1,
            price: 40
        }]);

    it('getSubtotal() should return 0 if no items are passed in', function() {
        var cartSummary = new CartSummary([]);
        expect(cartSummary.getSubtotal()).to.equal(0);
    });

    /*it('getSubtotal() should return the sum of the price * quantity for all items', function() {
        
        expect(cartSummary.getSubtotal()).to.equal(300);
    });*/

    it('getTax() should return 0 if no items are passed in', function() {
        var cartSummary = new CartSummary([]);
        expect(cartSummary.getTax()).to.equal(0);
    });

    it('getTotal() should return 0 if no items are passed in', function() {
        var cartSummary = new CartSummary([]);
        expect(cartSummary.getTotal()).to.equal(0);
    });

    it('getDiscount should return the full price if it is not a sale day', function() {

        expect(cartSummary.getDiscount(false)).to.equal(360);
    });
});
