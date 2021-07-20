import { getLetterCount } from '../LetterCount';

test('getLetterCount if empty parameter', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).toEqual(expected);
});