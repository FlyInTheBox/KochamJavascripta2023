let x = prompt("Podaj dolną granicę przedziału");
let y = prompt("Podaj górną granicę przedziału");
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * (y - x + 1)) + parseInt(x));
}
let minNumber = Math.min(...randomNumbers);
let maxNumber = Math.max(...randomNumbers);

document.write("<table>");

document.write("<tr>");
document.write("<th colspan='10'>Dziesięć losowych liczb całkowitych z przedziału od " + x + " do " + y + "</th>");
document.write("</tr>");

document.write("<tr>");
for (let i = 0; i < 10; i++) {
    document.write("<td>" + randomNumbers[i] + "</td>");
}
document.write("</tr>");

document.write("<tr>");
document.write("<td colspan='10'>Najmniejsza wylosowana liczba:  "+minNumber+ "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td colspan='10'>Największa wylosowana liczba:  "+ maxNumber+"</td>");;
document.write("</tr>");

document.write("</table>");
