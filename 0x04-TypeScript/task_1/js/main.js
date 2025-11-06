var teacher = {
    firstName: "jane",
    lastName: "rose",
    fullTimeEmployee: true,
    yearsOfExperience: 13,
    location: "eygpt",
    contract: true
};
console.log(teacher);
var director = {
    firstName: "jane",
    lastName: "rose",
    fullTimeEmployee: true,
    location: "eygpt",
    numberOfReports: 3,
};
console.log(director);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log(printTeacher("john", "jeo"));
