import { getLetterCount } from '../LetterCount';

describe('getLetterCount', () => {
    test('if empty parameter', () => {
        const expected = {};
        const actual = getLetterCount('');
        expect(actual).toEqual(expected);
    });
    
    test('return correct count for a word with only a letter of each letter', () => {
        const expected = {c:1, a:1, t:1};
        const actual = getLetterCount('cat');
        expect(actual).toEqual(expected);
    });
});