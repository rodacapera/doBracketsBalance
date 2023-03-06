const doBracketsBalance = (str) => {
  const data = [];
  const bracketsMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let bracket of str) {
    //if existing character add it in data array
    if (bracketsMap[bracket]) {
      data.push(bracket);
    } else {
      //get the last character and remove it from the array
      const poppedBracket = data.pop();
      //find the pair
      if (bracketsMap[poppedBracket] !== bracket) {
        return false;
      }
    }
  }
  return data.length === 0; //if data.length is equal to 0 return true
};
const result = doBracketsBalance("[()[]]");
console.log(result);
