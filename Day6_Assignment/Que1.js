let persons = [
    {
        name : "Snehal",
        age : 20,
        city : "Pune",
        salary : 25000,
    },
    {
        name : "Mayura",
        age : 28,
        city : "Banglore",
        salary : 60000,
    },
    {
        name : "Omkar",
        age : 33,
        city : "Pune",
        salary : 40000,
    },
    {
        name : "Aman",
        age : 30,
        city : "Delhi",
        salary : 55000,
    },
    {
        name : "Preeti",
        age : 25,
        city : "Mumbai",
        salary : 35000,
    },
];

function display(parray)
{
    let tabledata = " ";
    let srno = 1;
    parray.forEach(function (person,index){
        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
        <td>${person.salary}</td>
        <td><button onclick='deleteSuperhero(${index})'>Delete</button></td>
        </tr>`

        tabledata += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
display(persons);

function searchByName()
{
    let searchvalue = document.getElementById("searchName").value;

    let newdata = persons.filter(function(person){
        return (person.name.toUpperCase().indexOf(searchvalue.toUpperCase())!=-1);
    });

    console.log(newdata);
    display(newdata);
}

function searchByCity()
{
    let searchvalue1 = document.getElementById("searchCity").value;

    let newdata1 = persons.filter(function(person){
        return (person.city.toUpperCase().indexOf(searchvalue1.toUpperCase())!=-1);
    });

    console.log(newdata1);
    display(newdata1);
}

function deleteSuperhero(index)
{
    persons.splice(index,1);
    display(persons);
}