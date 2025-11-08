interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3)


interface Director extends Teacher{
    // firstName : string,
    // lastName : string,
    // fullTimeEmployee : boolean,
    // location : string,
    numberOfReports: number
}

const director : Director = {
    firstName : "jane",
    lastName : "rose",
    fullTimeEmployee : true,
    location : "eygpt",
    numberOfReports : 3,
}

console.log(director);


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}


console.log(printTeacher({ firstName: "John", lastName: "Doe" }));


interface StudentClassInterface{
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor{
    new(firstName: string, lastName: string) : StudentClassInterface;
}


class StudentClass{
    firstName: string;
    lastName: string;

    constructor(firstName: string , lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
        workOnHomework(): string {
            return "Currently working";
        }
        displayName(): string {
            return this.firstName;
        }
    }


const student = new StudentClass("john", "deo");
console.log(student.displayName());
console.log(student.workOnHomework());


