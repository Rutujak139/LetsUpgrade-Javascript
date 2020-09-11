function printvalue()
{
    const ele = document.getElementsByClassName("copy");
    const ele1 = document.getElementsByClassName("paste");
    let input = ele[0].value;
    ele1[0].value = input;
    console.log(ele[0].value);
};