# ES6 JS Assignment

## Question 1

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
Question 1 Solution can be found on Line 1 - 10 in the [JavaScript File](/main.js)

## Question 2

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

Question 2 Solution can be found on Line 13 - 20 in the [JavaScript File](/main.js)

## Question 3

> **Destructure and assign the elements of countries array to fin, est, sw, den, nor**
> 
>const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

```javascript
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = countries;
console.log(countries);
```

Question 3 Solution can be found on Line 24 - 26 in the [JavaScript File](/main.js)

## Question 4

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
