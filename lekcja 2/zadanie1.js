heder = document.querySelector('header');
heder.style.backgroundColor= "yellow";

pream = document.getElementById('naglowek');
pream.style.fontFamily= 'Arial Black';
pream.innerHTML = 'Preambuła';

sekcja = document.getElementsByTagName("section");
for (const el of sekcja) {
    el.style.border= "2px solid brown";
}

