"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let form = document.forms.namedItem("form");
    form.addEventListener("submit", handleFormSubmit);
    async function handleFormSubmit(_event) {
        _event.preventDefault();
        // let url: string = "https://testgisjk.herokuapp.com/";
        let url = "http://localhost:8100/";
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseValue = await response.text();
        console.log(responseValue);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map