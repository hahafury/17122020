// 1) ----------------------
let a = [4, 5, 2, -3, 66, 12, 3, 0, 7, -3, 31, 6, 79];
let b = [5,62,3,6,8,23,7,435,-432,-3,-2,-8,3,-31,0]
function CountEvenElements(array){
    let sumEvenElements = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0) {
            sumEvenElements += array[i];
        }
    }
    return sumEvenElements;
}
console.log(CountEvenElements(a));
console.log('------------------------') 
// 2**) ----------------------
function UnionOfArrays(firstArray, secondArray) {
    if (Array.isArray(firstArray, secondArray)) {
        combinedArray = Array.from(new Set(firstArray.concat(secondArray)));
        return `Ваш объединенный массив без повторяющихся елементов : [${combinedArray}]`;
    }
    else {
        return 'Введите массив!';
    }
}
console.log(UnionOfArrays(a, b));
console.log('------------------------') 
// 3*) ----------------------
function ToCamelCase(str) {
    return str
        .split(' ')
        .map((word, index) => index == -1 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}
let userStr = prompt('Введите строку');
console.log(ToCamelCase(userStr));
console.log('------------------------');
// 4) ----------------------
function AddingZeros(number, numberOfZeros) {
    for (let i = 0; i <= numberOfZeros;i++){
        number = number + '0';
    }
    number = (Number(number) < 0) ? (number = -number, number += '-') : false;
    number = number.split('').reverse().join("");
    return number;
}
console.log(AddingZeros(-5, 6));
console.log('------------------------');
// 5*) ----------------------
let worker = {
    name: 'John',
    surname: 'Doe',
    workExperience: 6,
    wage: 1500,
    salary: function Salary() {
        let Salary = 0;
        if (this.workExperience >= 5 && this.workExperience < 8) {
            Salary += this.wage + (this.wage * 0.05);
        }
        else if (this.workExperience >= 8) {
            Salary += this.wage + (this.wage * 0.1);
        }
        return Salary;
    }
}
console.log('Зарплата ', worker.name, ' ', worker.surname, ' = ', worker.salary());