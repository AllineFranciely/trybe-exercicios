const sum = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum(5, 8, 9, 13));