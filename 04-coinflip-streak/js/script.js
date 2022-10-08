var coinFlip;
var result;
console.log("Welcome to Coin Flip Streak Game\n");

do
{
coinFlip=Math.random();
console.log("The random number = "+coinFlip+"\n");
result=Math.round(coinFlip);
if(result==0)
{
    console.log("Head \n");
}
else
{
    console.log("Tail: Game Over \n");
    break;
} 

}while(1)


/*for(i=0;i<=10;i++)
{
coinFlip=Math.random();
console.log("The random number = "+coinFlip+"\n");
result=Math.round(coinFlip);
if(result==0)
{
    console.log("Head \n");
}
else
{
    console.log("Tail \n");
} 
}*/
