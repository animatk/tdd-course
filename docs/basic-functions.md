[< Rerurn](../README.md)

# Testing Basic Functions

In the TDD LinkedIn's course, the instructor created a basic function called Letter-Count, which basically returns an object with the grouped list of the letters in a word sent as a parameter in the function and the number of times that letter is repeated, example:

```
cat -> {c:1, a:1, t:1}
better -> {b:1, e:2, t:2, r:1}
```

our first step is to create the structure inside ReactJS and Jest to test this function:

```
src
| +-- Components
| | +-- __test__
| | | +-- LetterCount.test.js
| | +-- LetterCount.js
| +-- App.js
```
after that in the test file, we going to create the first case without creating code in our production file (TDD)

we can run `npm run test` to start **Jest** testing mode.

following the Red - Green - Refactor cycle **RGR** we going to create a test in `LetterCount.test.js` that will fail.

```javascript
import { getLetterCount } from '../LetterCount';

test('getLetterCount if empty parameter', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).toEqual(expected);
});
```
The test fails because the function `getLetterCount` doesn't exist, once we got a **Red** test in the cycle we can start to create production code in `LetterCount.js` to make the test past

```javascript
export const getLetterCount = string => ({})
```
Following the RGR cycle, we must do just enough code in our production function to make the test passed once the test is passed we should stop the development in the production code and start creating a new failing test.