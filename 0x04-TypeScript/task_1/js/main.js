var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director = {
    firstName: "jane",
    lastName: "rose",
    fullTimeEmployee: true,
    location: "eygpt",
    numberOfReports: 3,
};
console.log(director);
function printTeacher(firstName, lastName) {
    return "".concat(firstName, ". ").concat(lastName);
}
console.log(printTeacher("John", "Doe"));
