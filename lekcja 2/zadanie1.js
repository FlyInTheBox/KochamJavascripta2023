heder = document.querySelector('header');
heder.style.backgroundColor= "yellow";

pream = document.getElementById('naglowek');
pream.style.fontFamily= 'Arial Black';
pream.innerHTML = 'Preambuła';

sekcja = document.getElementsByTagName("section");
for (const el of sekcja) {
    el.style.border= "2px solid brown";
}
glowna = document.getElementsByClassName('main_column');
console.log(glowna[0]);
glowna[0].innerHTML = "<h1>Specjalność Szefa:</h1>";
menu = document.createElement('p');
menu.innerHTML = '<p>Kebab na frytkach_-_</p>'
glowna[0].appendChild(menu);

stupka = document.getElementsByTagName('footer');
fcontent = document.createElement('div');
fcontent.style = 'background-color: pink; text-align: center';
fcontent.innerHTML = '<p>&copy</p>'
stupka[0].appendChild(fcontent);

deleter = document.getElementsByTagName("h1");
for (let i = 0; i<deleter.length; i++) {
    if (deleter[i].innerText == 'Kolumna III') {
        deleter[i].remove();
    }
}

cursive1 = document.createElement("p");
cursive2 = document.createElement("p");
cursive1.innerHTML = '<i>Pochylony tekst</i>';
heder.appendChild(cursive1);
cursive2.innerText = '<i>Pochylony tekst</i>';
heder.appendChild(cursive2);

body = document.getElementsByTagName("body");
sekcjaZderzak = document.createElement("section");
sekcjaZderzak.style = 'border: 2px dotted blue;';
sekcjaZderzak.style.padding = '10px 20px'
sekcjaZderzak.innerText = 'Zderzak';
body[0].appendChild(sekcjaZderzak);


