"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let form = document.forms.namedItem("form");
    form.addEventListener("submit", handleFormSubmit);
    async function handleFormSubmit(_event) {
        _event.preventDefault();
        // let url: string = "https://testgisjk.herokuapp.com/html/";
        let url = "http://localhost:8100/";
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseValueText = await response.text();
        console.log(responseValueText);
    }
    let btnGetData = document.getElementById("get-data");
    btnGetData.addEventListener("click", handleBtnGetData);
    async function handleBtnGetData(_event) {
        // let url: string = "https://testgisjk.herokuapp.com/html/";
        let url = "http://localhost:8100/getData";
        let response = await fetch(url);
        let responseValues = await response.json();
        let dataDropArea = document.getElementById("loaded-data");
        responseValues.forEach(responseValue => {
            let htmtlElment = document.createElement("p");
            htmtlElment.innerHTML = `DB_ID: ${responseValue["_id"]}, e-mail: ${responseValue["e-mail"]}, Name: ${responseValue["name"]}, Nachricht: ${responseValue["message"]}, consent: ${responseValue["consent"]}`;
            dataDropArea.appendChild(htmtlElment);
        });
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map