function CartSummary(items) {
	this._items = items;
}

CartSummary.prototype.getSubtotal = function() {
	if (this._items.length) {
		return this._items.reduce(function(subtotal, item) {
			return subtotal += (item.quantity * item.price);
		}, 0);
	}
	return 0;
};

CartSummary.prototype.getTax = function() {
	return this.getSubtotal() * 0.2;
};

CartSummary.prototype.getTotal = function() {
	return this.getSubtotal() + this.getTax();
};

CartSummary.prototype.getDiscount = function(saleDay) {
	if (saleDay) {
		return this.getTotal() * (1 - 0.2);
	}
	return this.getTotal();
};

CartSummary.prototype.throwError = function(throwError) {
	if (throwError) {
		throw new Error("throwing an error");
	}
};


module.exports = CartSummary;
