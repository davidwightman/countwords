import countWords from '../countWords';

it('counts the correct number of words', () => {
	expect(countWords('How are you')).toBe(3);
});
