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
    elements.forEach(function (element) {
        console.log(element.tagName);
        if (element.tagName === "STRONG") {
            element.style.border = "10px dotted green";
        }
    });
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

