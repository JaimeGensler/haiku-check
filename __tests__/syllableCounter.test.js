import { syllableCounter } from './../src/js/syllableCounter.js';

describe('syllableCounter', () => {

  test('should immediately return 1 for one/two letter words', () => {
    expect(syllableCounter('I')).toEqual(1);
    expect (syllableCounter('or')).toEqual(1);
  });

  test('should return the number of vowel groups in a word', () => {
    expect(syllableCounter('apple')).toEqual(2);
    expect(syllableCounter('general')).toEqual(3);
    expect(syllableCounter('our')).toEqual(1); //intentionally too few
    expect(syllableCounter('rhythm')).toEqual(1); //intentionally too many
  });
});
