// Question 1: create a class for employees with parameters for name, id number, permissions they can perform, and store number where they work
class Employee {
    constructor(name, idNumber, permissions, storeNumber){
        this.name = name;
        this.idNumber = idNumber;
        this.permissions = permissions;
        this.storeNumber = storeNumber;
    }
}
console.log(Employee);

// Question 2: create a class for manager that extends the Employee class because they are an employee, create two new parameters for changing permissions employees can perform and the list of employees they manage
class Manager extends Employee {
constructor(name, idNumber, permissions, storeNumber, changePermissions, listEmployees){
    super(name, idNumber, permissions, storeNumber);
    this.changePermissions = changePermissions;
    this.listEmployees = listEmployees;
    }    
}
console.log(Manager);

// Question 3: const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = countries;
console.log(countries);

// Question 4: const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
//     }
//     Destructure the rectangle object by its properties.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
myRectangle(rectangle);
function myRectangle({width, height, area, perimeter}){
    const message = "My width is " + width + ", my height is " + height + ", my area is " + area + ", and my perimeter is " + perimeter + ".";
    document.getElementById("demo").innerHTML = message;
}


// Question 5: const evens = [0, 2, 4, 6, 8, 10]
// const odds = [1, 3, 5, 7, 9]
// Using the spread operator, the Array .map() method, and at least one arrow function to
// place the values from evens and odds into an array and display the values on a html
// screen in numerical order.
const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];
let numbers = [...evens, ...odds];
document.getElementById("unsortedNumbers").innerHTML = "Unosrted Numbers: " + numbers
let sorted = numbers.sort((a,b) => a-b)
const sortNumbers = numbers.map(() => document.getElementById("sortedNumbers").innerHTML = "Sorted Numbers: " + sorted)
console.log(sortNumbers);
