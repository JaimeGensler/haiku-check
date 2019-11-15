import { syllableCounter } from './../src/js/syllableCounter.js';

describe('syllableCounter', () => {

  test('should immediately return 1 for one/two letter words', () => {
    expect(syllableCounter('I')).toEqual(1);
    expect (syllableCounter('or')).toEqual(1);
  });

  test('should return the number of vowel groups in a word', () => {
    expect(syllableCounter('apple')).toEqual(2);
    expect(syllableCounter('general')).toEqual(3);
  });

  test('should detect silent e', () => {
    expect(syllableCounter('orange')).toEqual(2);
    expect(syllableCounter('have')).toEqual(1);
    expect(syllableCounter('cable')).toEqual(2);
  });
  test('should detect silent e', () => {
  // test('should count total syllables in a sentance', () => {
  //   expect(syllableCounter("Here's your sentances!")).toEqual(5);//failed
  //   expect(syllableCounter("Here is your sentances!")).toEqual(6);
  // });
});
