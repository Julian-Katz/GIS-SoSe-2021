"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let form = document.forms.namedItem("form");
    let form2 = document.forms.namedItem("form2");
    form.addEventListener("submit", handleFormSubmit);
    form2.addEventListener("submit", handleFormSubmit2);
    async function handleFormSubmit(_event) {
        _event.preventDefault();
        let url = "https://testgisjk.herokuapp.com/json/";
        // let url: string = "http://localhost:8100/html/";
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseValueText = await response.text();
        let body = document.querySelector("body");
        let htmlElment = document.createElement("p");
        htmlElment.innerHTML = responseValueText;
        body.appendChild(htmlElment);
    }
    async function handleFormSubmit2(_event) {
        _event.preventDefault();
        let url = "https://testgisjk.herokuapp.com/json/";
        // let url: string = "http://localhost:8100/json/";
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseValueText = await response.json();
        console.log(responseValueText);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map