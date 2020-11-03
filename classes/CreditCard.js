const luhn = require("luhn");

module.exports = 
class CreditCard {
	constructor(number, limit, balance = 0) {
		this.number = number;
		this.limit = limit;
		this.balance = balance;
		this.isValid = this.verifyCCNumber();
	}

	underLimit(amount) {
		return amount <= this.limit;
	}

	getBalance() {
		return this.balance;
	}

	modifyBalance(amount) {
		if (this.valid() && this.underLimit(amount + this.balance)) {
			this.balance += amount;
		}

		return this.balance;
	}

	valid() {
		return this.isValid;
	}

	verifyCCNumber() {
		return luhn.validate(this.number);
	}
}