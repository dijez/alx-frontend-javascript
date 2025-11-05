interface Teacher {
    readonly firstName : string,
    readonly lastName : string,
    fullTimeEmployee : boolean,
    yearsOfExperience ? : number, 
    location : string,
    [key : string] : any
}

const teacher : Teacher ={
    firstName : "jane",
    lastName : "rose",
    fullTimeEmployee : true,
    yearsOfExperience : 13,
    location : "eygpt",
    contract : true
}

console.log(teacher)


interface Directors extends Teacher{
    firstName : string,
    lastName : string,
    fullTimeEmployee : boolean,
    location : string,
    numberOfReports: number
}

const director : Directors = {
    firstName : "jane",
    lastName : "rose",
    fullTimeEmployee : true,
    location : "eygpt",
    numberOfReports : 3,
}

console.log(director);

