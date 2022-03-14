# ES6 JS Assignment

I have created a JS file to practice various ES6 methods. If you click the dropdown arrows you can view code snippets and the problem I am trying to solve. This is a [link](https://cstegall07.github.io/es6-js-assignment/) to the website for problems 4 & 5. (Right click the link to open in a new tab).

<details> <summary> Question 1 </summary> 

 ## Question 1 Solution
 
 > **Create an Employee class.**
 > 
> An employee should have
 >  * name
 > * Id number
 >  * List of permissions that they can perform on the company website
 >  * Store number for the store where they work

```javascript
class Employee {
    constructor(name, idNumber, permissions, storeNumber){
        this.name = name;
        this.idNumber = idNumber;
        this.permissions = permissions;
        this.storeNumber = storeNumber;
    }
}
```
Question 1 Solution can be found on lines 1 - 10 in the [JavaScript File](/main.js)
 </details>

<details> <summary> Question 2 </summary> 
 
## Question 2 Solution

> **Create a Manager class.**
> 
>  ● A manager is a type of employee.
> 
> ● A manager should should have
> 
> &nbsp; &nbsp; &nbsp; &nbsp; ○ name
>  
> &nbsp; &nbsp; &nbsp; &nbsp; ○ Id number
>  
> &nbsp; &nbsp; &nbsp; &nbsp; ○ List of permissions that they can perform on the company website
>  
> &nbsp; &nbsp; &nbsp; &nbsp; ○ Store number for the store where they work
>  
> &nbsp; &nbsp; &nbsp; &nbsp; ○ List of employees they manage
>  
> &nbsp; &nbsp; &nbsp; &nbsp; ○ The ability to change the permissions an employee that they manage has
on the website.

```javascript
class Manager extends Employee {
constructor(name, idNumber, permissions, storeNumber, changePermissions, listEmployees){
    super(name, idNumber, permissions, storeNumber);
    this.changePermissions = changePermissions;
    this.listEmployees = listEmployees;
    }    
}
```

Question 2 Solution can be found on lines 13 - 20 in the [JavaScript File](/main.js)
 </details>

<details> <summary> Question 3 </summary> 
 
## Question 3 Solution

> **Destructure and assign the elements of countries array to fin, est, sw, den, nor**
> 
>const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

```javascript
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = countries;
console.log(countries);
```

Question 3 Solution can be found on lines 24 - 26 in the [JavaScript File](/main.js)
 </details>

<details> <summary> Question 4 </summary>
 
## Question 4 Solution

>**Destructure the rectangle object by its properties.**
>
>const rectangle = {
>
>width: 20,
>
>height: 10,
>
>area: 200,
>
>perimeter: 60
>
>}

```javascript
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
```


Question 4 Solution can be found on lines 35 - 45 in the [JavaScript File](/main.js)
 </details>

<details> <summary> Question 5 </summary> 
 
## Question 5 Solution

> **Using the spread operator, the Array .map() method, and at least one arrow function to
place the values from evens and odds into an array and display the values on a html
screen in numerical order.**
> 
> const evens = [0, 2, 4, 6, 8, 10]
> 
> const odds = [1, 3, 5, 7, 9]

```javascript
const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];
let numbers = [...evens, ...odds];
document.getElementById("unsortedNumbers").innerHTML = numbers
let sorted = numbers.sort((a,b) => a-b)
const sortNumbers = numbers.map(() => document.getElementById("sortedNumbers").innerHTML = sorted)
```


Question 5 Solution can be found on lines 53 - 59 in the [JavaScript File](/main.js)
 </details>
