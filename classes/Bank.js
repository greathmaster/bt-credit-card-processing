module.exports = 
class Bank {
	constructor() {
		this.users = {};
	}

	addUser(user) {
		this.users[user.name] = user;
	}

	updateBalance(user, type, amount) {
		if (type.toLowerCase() === "credit") amount = -amount;
		return this.users[user].getCard().modifyBalance(amount);
	}

	summaryOutput() {

		let outputStr = "\n"
		
		Object.values(this.users)
			.sort((a, b) => {
				return a.getName().toLowerCase() < b.getName().toLowerCase()
					? -1
					: 1;
			})
			.forEach((user) => {
				let userCard = user.getCard();
				let balString = userCard.valid()
					? `$${userCard.getBalance()}`
					: "error";
				outputStr += (`${user.getName()}: ${balString}\n`);
			});
			
			return outputStr;
	}
}