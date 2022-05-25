function operate(num1,num2,operator){
    let ans;
    if(operator === '+')
        ans=num1+num2;
    else if(operator === '-')
        ans=num1-num2;
    else if(operator === '*')
        ans=num1*num2;
    else if(operator === '/')
        ans=num1/num2;
}

let digitbuttons = document.querySelectorAll('.digitbtn');
console.log(digitbuttons);
let enteredvalue;

digitbuttons.forEach(addEventListener('click'),(e) =>{
    console.log(e);
});