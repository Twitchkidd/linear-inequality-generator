Problem2(1, 'Solve linear inequality level 2', 2, rand => {
	/*
	 * For this problem, randomly generate a linear inequality, e.g. 7(4x + 5) + 7 < 8x - 5
	 * The answer should be the interval of values for x.
	 *
	 * Inequalities with <, >, >=, and <= should all be generated.
	 *
	 * Complete the explanation of how to solve the equation.
	 */

	/* Create constants for the problem. Integers range from -10 to 10. .*/
	const n1 = rand.integer(-10, 10);
	const n2 = rand.integer(-10, 10);
	const n3 = rand.integer(-10, 10);
	const n4 = rand.integer(-10, 10);
	const n5 = rand.integer(-10, 10);
	const n6 = rand.integer(-10, 10);

	/* The ansNum is the number that x will either be greater than (or equal to) or less than (or
equal to), depending on the sign. This is cast to a fraction, and then used in each case below
depending on the sign.*/
	const ansNum = Num.F(n6 - n4 - n1 * n3, n1 * n2 - n5);

	/* Each sign should have an equal change of generating.
  Generates an answer based on each sign. */

	const p = rand.prob();

	var sign = '';

	var answer = 'blank';
	if (p < 0.25) {
		sign = '<';
		if (n1 * n2 - n5 >= 0) {
			answer = `(:-00, ${ansNum})`;
		} else {
			answer = `(${ansNum}, :00)`;
		}
	} else if (p < 0.5) {
		sign = '>';
		if (n1 * n2 - n5 < 0) {
			answer = `(:-00, ${ansNum})`;
		} else {
			answer = `(${ansNum}, :00)`;
		}
	} else if (p < 0.75) {
		sign = '<=';

		if (n1 * n2 - n5 >= 0) {
			answer = `[:-00, ${ansNum}]`;
		} else {
			answer = `[${ansNum}, :00]`;
		}
	} else {
		sign = '>=';
		if (n1 * n2 - n5 < 0) {
			answer = `[:-00, ${ansNum}]`;
		} else {
			answer = `[${ansNum}, :00]`;
		}
	}

	const question = `|||${n1}*(${n2}x + ${n3}) + ${n4} ${sign} ${n5}x + ${n6}|||`;

	const a = answer.toString();
	const explanation = `Begin the problem by distributing <||${n1}||> to <||(${n2}x + ${n3})||> Combine like terms
  to get <||(${n1 * n2 - n5}x) ${sign} (${
		n6 - n4 - n1 * n3
	})||> Make sure to flip the sign when
  multiplying or dividing by a negative number! `;

	return {
		instructions: `Solve the linear inequality for |||x|||. Write your answer in interval notation.`,
		question: question,
		answers: [a],
		explanation: explanation,
		answerType: { form: 'input' },
	};
});
