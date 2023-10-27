buttonAction = document.getElementById('action');
answer = document.getElementById('answer');
function clicked() {
    if (answer.className == 'blur') {
        answer.classList.toggle('blur');
        buttonAction.innerText = 'Ukryj wynik';}
    else {

        answer.classList.toggle('blur');
        buttonAction.innerText = 'Pokaż wynik';
    }
}