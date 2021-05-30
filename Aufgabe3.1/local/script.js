"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let form = document.forms.namedItem("form");
    form.addEventListener("submit", async function (_event) {
        _event.preventDefault();
        let url = "https://testgisjk.herokuapp.com/";
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseValue = await response;
        console.log(responseValue);
    });
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map