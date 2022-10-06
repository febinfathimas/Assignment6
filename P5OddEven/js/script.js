var check;
console.log("Odd and even numbers between 1 and 15 \n")
for(i=1;i<=15;i++)
{
check = parseInt(i);
//check if the number is even
if(check % 2 == 0) {
    console.log(check+" is even number \n");
}

// if the number is odd
else {
    console.log(check+" is odd number \n");
}
}
