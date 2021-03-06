export const generateCode = () => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const code = [];

  while (code.length < 4) {
    let rand = Math.floor(Math.random() * nums.length);
    code.push(nums[rand]);
    nums.splice(rand, 1);
  }

  return code;
};

export const isPlayValid = input => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === null) return false;
  }
  return true;
};

export const checkMatches = (code, input) => {
  const result = {
    matches: [],
    hits: 0
  };
  // 3 => number is correct and at the right index
  // 2 => number is in the code but not at the right index
  // 1 => number is not in the code
  for (let i = 0; i < code.length; i++) {
    if (code[i] === input[i]) {
      result.matches.push(3);
      result.hits++;
    } else if (code.includes(input[i])) {
      result.matches.push(2);
    } else {
      result.matches.push(1);
    }
  }
  return result;
};

export const isWinningPlay = arrOfMatches => {
  for (let i = 0; i < arrOfMatches.length; i++) {
    if (arrOfMatches[i] !== 3) return false;
  }
  return true;
};

export const getScore = (time, turns) => {
  let t = Math.floor(Date.now() - time) / 1000;
  let timeBonus;
  if (t < 15) {
    timeBonus = 2000;
  } else if (t < 30) {
    timeBonus = 1400;
  } else if (t < 60) {
    timeBonus = 700;
  } else {
    timeBonus = 450;
  }

  return Math.floor(turns * timeBonus * t);
};
