export const drawLetters = () => {
  // Implement this method for wave 1
  const LETTER_POOL = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1,
  };

  let all_letters = [];

  /*function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
*/
  const letterPool = function (LETTER_POOL) {
    for (const key in LETTER_POOL) {
      /*for (let letter = key; value > 1; ) {
        console.log(`This is inside the LETTER_POOL function ${letter}`);
        all_letters.push(letter);
      } */
      for (let value = 0; value < LETTER_POOL[key]; value++) {
        all_letters.push(key);
      }
      // LETTER_POOL[key] is value
    }
    //shuffle(all_letters.keys());
  };
  letterPool(LETTER_POOL);

  for (let i = all_letters.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
    let temp = all_letters[j];
    all_letters[j] = all_letters[i];
    all_letters[i] = temp;
  }

  const handFunction = function (all_letters) {
    let hand = [];
    for (const letter of all_letters) {
      while (hand.length < 10) {
        hand.push(letter);
        break;
      }
    }
    return hand;
  };
  let hand = handFunction(all_letters);
  return hand;
};

//export const usesAvailableLetters = (input, lettersInHand) => {
// Implement this method for wave 2
//};

//export const scoreWord = (word) => {
// Implement this method for wave 3
//};

//export const highestScoreFrom = (words) => {
// Implement this method for wave 4
//};
