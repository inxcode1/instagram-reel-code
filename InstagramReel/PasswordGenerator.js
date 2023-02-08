const numbers = "0123456789";
const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
const capAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()";

const character = numbers + smallAlphabets + capAlphabets + symbols;

let password = "";

const getPassword = (length) => {
  for (let i = 0; i <= length; i++) {
    let randomNumber = Math.floor(Math.random() * character.length);
    password += character.substring(randomNumber, randomNumber + 1);
  }
  return password;
};

console.log(getPassword(12));
