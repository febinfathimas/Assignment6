var coinFlip=Math.random();
var result;
var choice;
document.write("<p>Welcome to the Coin Flip Game</p>");

choice = window.prompt("Select Heads or Tails (h/t)");

if(coinFlip<=0.5)
{document.write("HEAD</br>");
result="h";
}
else
{document.write("TAIL</br>");
result="t";}
if ((choice === "h") && (result==="h"))
{document.write("The flip was heads and you chose heads...you win!");}
else if((choice === "t") && (result==="h"))
{document.write(" The flip was heads but you chose tails...you lose!");  }
else if((choice === "h") && (result==="t"))
{document.write("The flip was tails but you chose heads...you lose! "); }
else if((choice === "t") && (result==="t"))
{document.write("The flip was tails and you chose tails...you win! "); }
