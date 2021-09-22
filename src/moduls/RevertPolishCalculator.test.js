
const RevertPolishCalculator =require( './RevertPolishCalculator');
const calc =  new RevertPolishCalculator();

describe("Base calculations", () => {
	  test('input string 5 = res num 5', () => {
			calc.input('5')
			expect(calc.output()).toEqual(5);
		});

		test('input 2 = res last sing 2', () => {
			calc.input(2)
			expect(calc.output()).toEqual(2);
		});

		test('input ( 2 + 5 ) = res 7', () => {
			calc.input('+')
			expect(calc.output()).toEqual(7);
		});

		test('input c ', () => {
			calc.input('c')
			expect(calc.output()).toEqual(0);
		});

		test('input 2 ', () => {
			calc.input(2)
			expect(calc.output()).toEqual(2);
		});

		test('input " 2 2 +" res 4 ', () => {
			calc.input( '2 2 +')
			expect(calc.output()).toEqual(4);
		});

		test('input " 2 2 +" res 4 ', () => {
			calc.input( '2 2 +')
			expect(calc.output()).toEqual(4);
		});

		test(' input 4 2 3 + + ', () => {
				calc.input( '4 2 3 + +')
				expect(calc.output()).toEqual(9);
			});

		test('input c ', () => {
			calc.input('c')
			expect(calc.output()).toEqual(0);
		});

		test(' input "5 1 2 + 4 * + 3 -" expect -14? ', () => {
			calc.input('5 1 2 + 4 * + 3 -')
			expect(calc.output()).toEqual(14);
		});
})
describe("Customer tests", () => {
	// input
	// > 5
	// 5
	// > 8
	// 8
	// > +
	// 13
	test('input 5 = res last sing 5', () => {
		calc.input(5)
		expect(calc.output()).toEqual(5);
	});
	test('input 8 = res last sing 8', () => {
		calc.input(8)
		expect(calc.output()).toEqual(8);
	});
	test('input "+" res last sing 8', () => {
		calc.input('+')
		expect(calc.output()).toEqual(13);
	});

	//  > 5 5 5 8 + + -
	// 	-13.0
	// 	> 13 +
	// 	0.0
	describe("add sing after expression calculations", () => {
		calc.input('q')
		test(' input "5 5 5 8 + + -" expect -13? ', () => {
			calc.input('5 5 5 8 + + -')
			expect(calc.output()).toEqual(-13);
		});
		test(' input 13 expect 0', () => {
			calc.input('13 +')
			expect(calc.output()).toEqual(0);
		});
	})



})

