// Program to convert minutes to seconds.

function convert(time)
{
    let parts = time.split(':'),minutes = +parts[0],seconds = +parts[1];
    return (minutes*60+seconds).toFixed(2);
}
convert('5:10');

console.log("Time in second ",convert("5:10"));

console.log("--------------------------");