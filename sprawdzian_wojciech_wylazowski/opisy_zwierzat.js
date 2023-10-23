
function showAnimals() {
    div = document.getElementById('content')
    span = document.getElementById('spana');
    console.log(span.dataset);
    if (div.innerHTML == '') {
        lista = document.createElement('ol');
        div.appendChild(lista);
        element1 = document.createElement("li");
        element1.innerText = span.dataset['moth'];
        lista.appendChild(element1);
        element2 = document.createElement("li");
        element2.innerText = span.dataset['bumblebee'];
        lista.appendChild(element2);
    }
    else {

        div.innerHTML = ''
    }
}