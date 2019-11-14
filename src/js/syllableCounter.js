export function syllableCounter(word) {
  if (word.length < 3) {
    return 1;
  }

  const aeiouy = /[aeiouy]/i;

  let vowelGroups = 0;
  for (let i = 0; i < word.length; i++) {
    if (aeiouy.test(word.charAt(i)) && !aeiouy.test(word.charAt(Math.min(word.length, i+1))))
      vowelGroups += 1;
  }

  return vowelGroups;
}
