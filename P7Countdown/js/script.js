var reqNumber;
reqNumber = window.prompt("Enter the Number to count down till zero");
reqNumber = parseFloat(reqNumber);
document.write("Counting down the entered number till zero <br/> ");
for(i=reqNumber;i>=0;i--)
{document.write(i);
document.write("<br/>");}