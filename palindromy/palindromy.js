main = document.getElementById('main');

function Znajdz() {
    if (document.getElementById('2').checked) {
        content = document.createElement("fieldset");
        main.appendChild(content);
        legend = document.createElement("legend");
        content.appendChild(legend);
        legend.innerText = 'Liczby palindromiczne dwucyfrowe';

        for (let i = 10; i < 100; i++) {
            let liczba = i.toString();
            let odwrocona = liczba.split('').reverse().join('');

            if (liczba === odwrocona) {
                content.innerText += ' ' + liczba + ',';
            }
        }
    }
    else if (document.getElementById('3').checked) {

    }
    else if (document.getElementById('4').checked) {

    }
    else if (document.getElementById('5').checked) {

    }
}