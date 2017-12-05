import countWords from '../countWords';

describe('the counting function', () => {
	it('counts the correct number of words', () => {
		expect(countWords('How are you')).toBe(3);
	});

	it('counts an empty string', () => {
		expect(countWords('')).toBe(0);
	});
});
