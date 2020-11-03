const User = require("../classes/User.js");
const CreditCard = require("../classes/CreditCard.js")
const Bank = require("../classes/Bank.js")

describe("Bank methods function correctly", () => {
	
	let bank = new Bank()

	let validCC_tony = new CreditCard(4111111111111111, 1000, 0)	
	let validCC_natasha = new CreditCard(5454545454545454, 3000, 0)
	let invalidCC_bruce = new CreditCard(1234567890123456, 2000, 0)

	let tony = new User("Tony", validCC_tony);
	
	let natasha = new User("Natasha", validCC_natasha)
	let bruce = new User ("Bruce", invalidCC_bruce)

	test("Correctly adds users", () => {
		bank.addUser(tony)
		bank.addUser(natasha)
		bank.addUser(bruce)
		expect(bank.users["Tony"].name).toEqual("Tony");
		expect(bank.users["Natasha"].name).toEqual("Natasha");
		expect(bank.users["Bruce"].name).toEqual("Bruce");
	});

	test("Correctly updates balance for users", () => {
		bank.updateBalance("Tony", "Charge", 500)
		bank.updateBalance("Tony", "Charge", 800)
		bank.updateBalance("Natasha", "Charge", 7)
		bank.updateBalance("Natasha", "Credit", 100)
		bank.updateBalance("Bruce", "Credit", 200)

		expect(tony.getCard().getBalance()).toEqual(500)
		expect(natasha.getCard().getBalance()).toEqual(-93)
		expect(bruce.getCard().getBalance()).toEqual(0)
	})

	test("Correctly logs the transaction summary in sorted order", () => {
		const outputStr = "\nBruce: error\nNatasha: $-93\nTony: $500\n"
		expect(bank.summaryOutput()).toEqual(outputStr)
	})

});