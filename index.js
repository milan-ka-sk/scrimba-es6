const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

// const {firstName, lastName} = personalInformation;
// console.log(`${firstName} ${lastName}`);

// we can even asign an alias
const {firstName: fn, lastName: ln} = personalInformation;
console.log(`${fn} ${ln}`);