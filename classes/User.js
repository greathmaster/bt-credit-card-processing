module.exports = 
class User {
	constructor(name, card) {
		this.name = name;
		this.card = card;
	}
	getName() {
		return this.name;
	}

	getCard() {
		return this.card;
	}
}
