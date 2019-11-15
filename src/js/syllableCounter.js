export function syllableCounter(word) {
  if (word.length < 3) return 1;

  const aeiouy = /[aeiouy]/i;
  const reggieAttempt = /[aeiou][bcdfghjklmnpqrstvwxz]{1,2}e$/i

  let vowelGroups = 0;
  for (let i = 0; i < word.length; i++) {
    if (aeiouy.test(word.charAt(i)) && !aeiouy.test(word.charAt(Math.min(word.length, i+1))))
      vowelGroups += 1;
  }
  if (reggieAttempt.test(word) && !(/(ble)$/i.test(word))) vowelGroups += -1;

  return vowelGroups;
}
//recognizes three sentances in arow
//accept sentance with 5syllables
//accept sentance with 7syllables
//accept sentance with 5syllables
