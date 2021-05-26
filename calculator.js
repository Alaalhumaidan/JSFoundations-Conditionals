const firstNumber = 5;
const secondNumber = 7;
const operation = "-"; //+ - * /

if (operation === "+")
console.log(`${firstNumber} ${operation} ${secondNumber} 
= ${firstNumber+secondNumber}`);

else if (operation === "-")
console.log(`${firstNumber} ${operation} ${secondNumber} 
= ${firstNumber-secondNumber}`);

else if (operation === "*")
console.log(`${firstNumber} ${operation} ${secondNumber} 
= ${firstNumber*secondNumber}`);

else if (operation === "/")
console.log(`${firstNumber} ${operation} ${secondNumber} 
= ${firstNumber/secondNumber}`);