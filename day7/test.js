const numbers = [10, 20, 30, 40]
const result = numbers.reduce((sum, number) => {
    return sum + number
}, 0)

console.log(result) // 100

let aPerson = [
    { name: 'John', age: 10 },
    { name: 'Kan', age: 10 },
    { name: 'OOO', age: 10 },
]

const step1 = aPerson.filter(obj => obj.age <= 20);
console.log(step1);
const callbackFunction = (sum, obj) => {
    return sum + obj.age
};


const step2 = reduce(step1, callbackFunction, 0)
console.log(step2);


const result_1 = aPerson.forEach((person) => {
    console.log(`Name oio: ${aPerson.name}, Age: ${aPerson.age}`)
});
console.log(result_1(aPerson));