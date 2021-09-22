const SEPARATION_SING = ' ';
class RevertPolishCalculator {

	constructor() {
		this.inputArray = [];
		this.result =[]
	}

	input(exp) {
		  if(!exp) {
				return null;
			}

      if(exp.length > 1 ) {
				this.parseStringExpression(exp);
			} else if(exp.length === 1 && exp === 'c' ){
         this.clear();
			} else {
				this.addSignToExp(exp);
			}

		  this.calcExpression()
	}

	getSing(sing) {
		return  Number(sing) ? Number(sing) : sing;
	}

	 parseStringExpression(exp) {
		let arr = exp.split(SEPARATION_SING);
		this.inputArray = [
			...this.result,
			...arr.map(item => {
				return this.getSing(item);
			})
		]
	}

	addSignToExp(sing) {
		this.inputArray = [
			...this.result,
			this.getSing(sing)
		]
	}

	calcExpression() {
		const arr =  this.inputArray;
		arr.forEach( item => {
			if(typeof(this.getAction(item)) === 'function' ){
				let b = this.result.pop();
				let a = this.result.pop(); // order important b then a
				this.result.push( this.getAction(item)(a,b) );
			} else {
				this.result.push(item);
			}
		})

	}


	 divide(numerator, denominator) {
		if (denominator === 0) {
			throw new Error('Divide by zero!')
		}
		else {
			return numerator / denominator;
		}
	}

	getAction(sing){
		switch(sing){
			case '+':
				 return (a,b) => a + b;
			case '-':
				return (a, b) => a - b;
			case '*':
				return (a,b) => a * b;
			case '/':
				return this.divide(a,b);
			default:
				return sing
		}
	}

  output(){

		if(this.result.length === 0 ){
			return 0;
		}
		if(this.result.length > 1){
			return this.result[this.result.length-1];
		}
		if(this.result.length === 1 ) {
			return this.result[0];
		}
    return this.result
	}

	clear () {
		this.inputArray = [];
		this.result = []
	}
}

module.exports = RevertPolishCalculator
