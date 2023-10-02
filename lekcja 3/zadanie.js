document.getElementById("button1").addEventListener("click", function () {
    const h6Element = document.querySelector("h6");
    h6Element.innerHTML = "<i>Świetnie!</i>";
});

document.getElementById("button2").addEventListener("click", function () {
    const h5Element = document.querySelector("h5");
    h5Element.innerText = "<i>Świetnie!</i>";
});

document.getElementById("button3").addEventListener("click", function () {
    const divElement = document.querySelector("div");
    const elements = divElement.querySelectorAll("del, code, strong, em");

    console.log("Wszystkie elementy w div:");
    for (let i = 0;i<elements.length;i++) {
        console.log(elements[i].tagName);
        if (elements[i].tagName === "STRONG") {
            elements[i].style.border = "10px dotted green";
        }
    }
});

document.getElementById("button4").addEventListener("click", function () {
    const pElement = document.querySelector("p[title]");
    const title = pElement.getAttribute("title");
    alert(title);
});

document.getElementById("button5").addEventListener("click", function () {
    const pElement = document.getElementById('pdir');
    pElement.setAttribute("dir", "rtl");
});

document.getElementById("button6").addEventListener("click", function () {
    const inputElement = document.querySelector("input");
    inputElement.toggleAttribute("disabled");

    const button = this;
    if (inputElement.hasAttribute("disabled")) {
        button.textContent = "Edycja jest teraz niemożliwa";
    } else {
        button.textContent = "Można edytować";
    }
});

document.getElementById("button7").addEventListener("click", function () {
    const paragraphs = document.querySelectorAll("p[style], p > a[href]");
    for(let i= 0;i<paragraphs.length;i++) {
        paragraphs[i].removeAttribute("style");
        if (paragraphs[i].tagName === "A") {
            paragraphs[i].removeAttribute("href");
        }
    }
});









/*
document.getElementById("button8").addEventListener("click", function () {
    const textarea = document.getElementById("colorTextarea");
    let color = "#";
    const characters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    textarea.style.backgroundColor = color;
    console.log("Wylosowany kolor:", color);
});
*/