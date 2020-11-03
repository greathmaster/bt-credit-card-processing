const readline = require("readline");
const fs = require("fs");
const User = require("./classes/User.js")
const CreditCard = require("./classes/CreditCard.js")
const Bank = require("./classes/Bank.js")

let myArgs = process.argv.slice(2);
let filename = myArgs[0];

let rl;

if (filename) {
	rl = readline.createInterface({
		input: fs.createReadStream(filename),
		output: process.stdout,
		console: false,
		terminal: false,
		prompt: "",
	});
} else {
	rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: "",
		terminal: false,
	});
}

const bank = new Bank();

rl.prompt();

rl.on("line", (line) => {
	let tokens = line.split(" ");
	command = tokens.shift().toLowerCase();

	if (command === "add") {
		let [name, number, limit] = tokens;

		let card = new CreditCard(number, parseInt(limit.substring(1)));
		let user = new User(name, card);

		bank.addUser(user);
	} else {
		let [name, amount] = tokens;
		bank.updateBalance(name, command, parseInt(amount.substring(1)));
	}
	rl.prompt();
});

rl.on("close", () => {
	console.log(bank.summaryOutput());
	process.exit(0);
});
