const CreditCard = require("../classes/CreditCard.js");

describe("CreditCard methods function correctly", () => {
	let validCC = new CreditCard(4111111111111111, 1000, 0)
	let invalidCC = new CreditCard(1234561231, 1000, 0)

	test("Retrieves correct balance", () => {
		expect(validCC.getBalance()).toEqual(0);
	});

	test("Correctly indicates if amount is less than or equal to limit", () => {
		expect(validCC.underLimit(1001)).toBeFalsy();
		expect(validCC.underLimit(999) && validCC.underLimit(1000)).toBeTruthy();		
	});

	test("Correctly adds to balance when under limit", () => {
		expect(validCC.modifyBalance(10)).toEqual(10)
	})

	test("Does not modify balance when over limit", () => {
		expect(validCC.modifyBalance(1000)).toEqual(10)
	})

	test("Maintains negative balance", () => {
		expect(validCC.modifyBalance(-11)).toEqual(-1)
	})

	test("Correctly verifies valid credit card number", () => {
		expect(validCC.verifyCCNumber()).toBeTruthy()
		expect(invalidCC.verifyCCNumber()).toBeFalsy()
	})

	test("Correctly indicates vaild or invalid card status", () => {
		expect(validCC.valid()).toBeTruthy()
		expect(invalidCC.valid()).toBeFalsy()
	})
});