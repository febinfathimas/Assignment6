var firstNumber;
var secondNumber;
var bigNumber;


firstNumber = window.prompt("Enter the first Number");
firstNumber = parseFloat(firstNumber);
secondNumber = window.prompt("Enter the Second Number");
secondNumber = parseFloat(secondNumber);
document.writeln("The numbers you entered are "+firstNumber+"&"+secondNumber+"</br>");
if(firstNumber>secondNumber)
{
    bigNumber=firstNumber;
    document.writeln("Greater number is: " + bigNumber);}
else if(firstNumber<secondNumber)
    {bigNumber=secondNumber;
    document.writeln("Greater Number is: " + bigNumber);}
else if (firstNumber===secondNumber)
    {bigNumber=firstNumber;
    window.document.writeln("Both Numbers are same: " + bigNumber);}

