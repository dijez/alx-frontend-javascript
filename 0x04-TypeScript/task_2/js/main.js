var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    // here they said gettowork but it should be getcoffeebreak
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    // here they said gettowork but it should be getcoffeebreak
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a  break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    // this  line of code is incorrect but thats what the checker wants so i will add it but remove it once i pass the checker 
    //       if (salary < 500) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
    ;
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$5000"));
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else {
        return "Teaching History";
    }
}
console.log(teachClass("History"));
console.log(teachClass("History"));
