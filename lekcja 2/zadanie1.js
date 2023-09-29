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
glowna.appendChild('menu');



