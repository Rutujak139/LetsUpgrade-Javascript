// Program to display only elements containing 'a' in them from a array.

let cities = ['Mumbai','Pune','Nagpur','Satara']
for(element of cities)
{
    if(element.toLowerCase().includes('a'))
        {
            console.log(element);
        }
}

console.log("--------------------------");