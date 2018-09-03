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
  for (let i = 0; i < code.length; i++) {
    if (code[i] === input[i]) {
      result.matches.push(true);
      result.hits++;
    } else {
      result.matches.push(false);
    }
  }
  return result;
};
