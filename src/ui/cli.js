const readline = require("readline");
const Calculator = require("../moduls/RevertPolishCalculator")

const calculator =  new Calculator();
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const recursiveAsyncReadLine = function () {
	rl.question('<: ', function (exp) {
		if (exp === 'q') {
			console.log('Finish', calculator.output());
			return rl.close();
		}
		calculator.input(exp);
		console.log('>:', calculator.output());
		recursiveAsyncReadLine();
	});
};

console.log('Revert Polish Calculator');
console.log('Put full expression or one by one sing ');
console.log('Put "c" to clear buffer value');
console.log('Put "q" to exit');
console.log('Start');
recursiveAsyncReadLine();
module.exports = rl;
