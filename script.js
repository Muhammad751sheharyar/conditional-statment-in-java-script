//     Q:1 need to check weather user insert a big value than the 100 or less .
alert("Enter a big value than the 100 or less");
var num=prompt("Enter the num ");
if( num >=100 ){
    alert(num+"number is grater  than 100");
}else if(num < 100){
    alert(num+"number is less than 100");
}else{
document.write("num is not define")
}

    
//   Q:2 need to check userfirst value is greater or user second value.
alert("Number checker grater than or  less than")
var firstNum=prompt("Enter the first number");
var secondNum=prompt("Enter the Second number");
if(firstNum > secondNum){
    alert(firstNum+"is grater than"+secondNum);
}else if(secondNum > firstNum){
     alert(secondNum+"is grater than"+firstNum);
}else{
    alert("pleace enter the number");
}

//  Q:3 need to check uservalue is perfect divisible by 2 or not
alert ("Enter the  Number divisible by 2 "); 
var num=prompt("Enter the perfect  Number divisible by 2");
if (num %2==0){
      alert(num+"is dividual 2")
}else{
    alert(num+"is not divisible 2")
}


//  Q:4 need to check uservalue is perfect divisible by 3 or not
alert ("Enter the perfect  Number divisible by 3 "); 
var num=prompt("enter the  Number divisible by 3");
if(num%3==0){
    alert(num+"is divisible by 3")
}else{
    alert(num+"is not divisible by 3")
}

//  Q:5 need to check uservalue is perfect divisible by 5 or not
alert ("Enter the  perfect Number divisible by 5 "); 
var num=prompt("Enter the  Number divisible by 5");
if (num %5==0){
    alert(num+"is divisible by 5");
}else{
    alert(num+"is not divisible by 5");
}


//   Q:6 need to check uservalue what is the reminder by divided by 2
alert("Enter the divided by 2 and reminder  ")
var num=prompt("enter the num");
var num1=num%2;
alert(num1);


//  Q:7 need to check uservalue what is the reminder by divided by 3
alert("Enter the divided by 3 and reminder  ")
var num =prompt("enter the number");
var num3= num % 3;
alert(num3);


//  Q:8 need to check uservalue what is the reminder by divided by 5
alert("Enter the divided by 5 and reminder  ")
var num =prompt("enter the number");
var num5= num % 5;
alert(num5);
 





