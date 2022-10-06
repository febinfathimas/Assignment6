document.writeln("Numers from 1 to 100 in which</br> Marco is multiple of 3</br>Polo is multiple of 5</br>MarcoPolo is multiples of 3 & 5</br>");
var marcoPolo;
for (i=1;i<=100;i++)
{
    marcoPolo=i;
if((marcoPolo%3===0) && (marcoPolo%5!==0))
{document.writeln("Marco !</br>");}
else if((marcoPolo%3!==0) && (marcoPolo%5===0))
{document.writeln("Polo !</br>");}
else if((marcoPolo%3===0) && (marcoPolo%5===0))
{document.writeln("Marco ! Polo !</br>");}
else{document.writeln(i+"</br>");}
}