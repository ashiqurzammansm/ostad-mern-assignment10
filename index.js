// 1. Function to calculate the difference between two arguments
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// 2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Function to find the minimum number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}

// 4. Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 5. Function to sort an array in descending order
function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
}

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7. Function to count the vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

// 8. Function to find the average of an array of numbers
function findAverage(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}

// Example calls (You can use these to test the functions)
console.log(calculateDifference(10, 5)); // 5
console.log(isOdd(7)); // true
console.log(findMin([3, 5, 7, 2, 9])); // 2
console.log(filterEvenNumbers([3, 5, 7, 2, 9])); // [2]
console.log(sortArrayDescending([3, 5, 7, 2, 9])); // [9, 7, 5, 3, 2]
console.log(lowercaseFirstLetter('Hello World')); // 'hello World'
console.log(countVowels('Hello World')); // 3
console.log(findAverage([3, 5, 7, 2, 9])); // 5.2
