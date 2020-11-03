const User = require("../classes/User.js");

describe("User getter methods function correctly", () => {
	let user = new User("Tony Stark", { number: 123 });

	test("getName returns correct name", () => {
		expect(user.getName()).toEqual("Tony Stark");
	});

	test("getCard return correct card number", () => {
		expect(user.getCard().number).toEqual(123);
	});
});