const randomNumber = () => Math.floor(Math.random() * 101);

const upperCase = (string) =>  string.toUpperCase();

const firstLetter = (string) => string[0]; // string.charAt(0).

const concatena = (firstString, secondString) => firstString + secondString;

module.exports = { 
  randomNumber,
  upperCase,
  firstLetter,
  concatena,
};
