import { syllableCounter } from './syllableCounter.js';

export function haikuCheck(poem){
  const lines = poem.split(' / ');
  if (lines.length !== 3) return false;
  lines[0] = lines[0].split(' ');
  lines[1] = lines[1].split(' ');
  lines[2] = lines[2].split(' ');

  for (let i = 0; i < lines.length; i++) { //iterate big array
    let lineSyllables = 0;
    lines[i].forEach(function(word) {
      lineSyllables += syllableCounter(word);
    });
    console.log(lineSyllables);
    if (i=0 && !(lineSyllables === 5)) return "a";
    if (i=1 && !(lineSyllables === 7)) return "b";
    console.log("test");
    if (i=2 && !(lineSyllables === 5)) return "c";
  }

  return true;
}
console.log(haikuCheck('word word word word word / word word word word word word word / word word word word word'));
