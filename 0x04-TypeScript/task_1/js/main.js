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
function printTeacher(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "".concat(firstName, ". ").concat(lastName);
}
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("john", "deo");
console.log(student.displayName());
console.log(student.workOnHomework());
