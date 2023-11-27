main = document.getElementById('main');

function Znajdz() {
    if (document.getElementById('2').checked) {
        let existingFieldset = document.getElementById('temp');
        if (existingFieldset != null) {
            existingFieldset.remove();
        }

        let content = document.createElement("fieldset");
        content.id = 'temp';
        let legend = document.createElement("legend");
        legend.innerHTML = 'Liczby palindromiczne dwucyfrowe';
        content.appendChild(legend);
        main.appendChild(content);

        let count = 0;
        for (let i = 10; i < 100; i++) {
            let liczba = i.toString();
            let odwrocona = liczba.split('').reverse().join('');
            if (liczba === odwrocona) {
                content.innerText += ' ' + liczba + ',';
                count++;
            }
        }
        main.innerHTML += 'Liczb palindromicznych dwucyfrowych jest: ' + count;
    }
    else if (document.getElementById('3').checked) {
        let existingFieldset = document.getElementById('temp');
        if (existingFieldset != null) {
            existingFieldset.remove();
        }

        let content = document.createElement("fieldset");
        content.id = 'temp';
        content.innerHTML += '<legend>Liczby palindromiczne trzycyfrowe</legend>';
        main.appendChild(content);

        let count = 0;
        for (let i = 100; i < 1000; i++) {
            let liczba = i.toString();
            let odwrocona = liczba.split('').reverse().join('');

            if (liczba === odwrocona) {
                content.innerText += ' ' + liczba + ',';
                count++;
            }
        }
        main.innerHTML += 'Liczb palindromicznych trzycyfrowych jest: ' + count;
    }
    else if (document.getElementById('4').checked) {
        let existingFieldset = document.getElementById('temp');
        if (existingFieldset != null) {
            existingFieldset.remove();
        }

        let content = document.createElement("fieldset");
        content.id = 'temp';
        main.appendChild(content);
        let legend = document.createElement("legend");
        legend.id = "legend";
        content.appendChild(legend);
        legend = document.getElementById('legend');
        legend.innerText = 'Liczby palindromiczne czterocyfrowe';

        let count = 0;
        for (let i = 1000; i < 10000; i++) {
            let liczba = i.toString();
            let odwrocona = liczba.split('').reverse().join('');

            if (liczba === odwrocona) {
                content.innerText += ' ' + liczba + ',';
                count++;
            }
        }
        main.innerHTML += 'Liczb palindromicznych czterocyfrowych jest: ' + count;
    }
    else if (document.getElementById('5').checked) {
        let existingFieldset = document.getElementById('temp');
        if (existingFieldset != null) {
            existingFieldset.remove();
        }

        let content = document.createElement("fieldset");
        content.id = 'temp';
        main.appendChild(content);

        content.innerHTML += '<legend>Liczby palindromiczne pięciocyfrowe</legend>';

        let count = 0;
        for (let i = 10000; i < 100000; i++) {
            let liczba = i.toString();
            let odwrocona = liczba.split('').reverse().join('');

            if (liczba === odwrocona) {
                content.innerText += ' ' + liczba + ',';
                count++;
            }
        }
        main.innerHTML += '<br>Liczb palindromicznych pięciocyfrowych jest: ' + count;
    }
}