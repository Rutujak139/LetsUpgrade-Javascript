// Create an array of objects
let India = [
    {
        Name:"Kartik",
        Age:30,
        Country:"India",
        Hobbies:["Playing Cricket","Listening Music","Travelling"],
    },
    {
        Name:"Kirti",
        Age:25,
        Country:"India",
        Hobbies:["Listening Music","Travelling"],
    },
    {
        Name:"Riddhima",
        Age:20,
        Country:"US",
        Hobbies:["Playing Badminton","Writing Novel","Book Reading"],
    },
]

// Display all objects
function printall()
{
    console.log(India);
}
printall();

// Display object having age less than 30
let age = India.filter(India => India.Age < 30);
console.log(age);

// Display object having country india
let country = India.filter(India => India.Country == "India");
console.log(country);



