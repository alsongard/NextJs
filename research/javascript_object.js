const person = {
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
};

// Destructuring the object
const { name, age, address } = person;

console.log(name); // Output: John Doe
console.log(age);  // Output: 30
console.log(address); // Output: { city: 'New York', state: 'NY' }

// Destructuring nested objects
const { address: { city, state } } = person;

console.log(city); // Output: New York
console.log(state); // Output: NY

// Assigning to new variable names
const { name: fullName, age: years } = person;

console.log(fullName); // Output: John Doe
console.log(years);    // Output: 30


 const peter = {name: "Swaelee", song: "just to save you", movie: "spiderman", lesson: {Subject: "javascript", Support: "nav"}};


 const {lesson: {Subject, Support}} = peter;
console.log(Subject);

console.log(Support);



