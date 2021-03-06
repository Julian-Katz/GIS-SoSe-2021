namespace Aufgabe3_2 {
    let form: HTMLFormElement = document.forms.namedItem("form");
    let form2: HTMLFormElement = document.forms.namedItem("form2");
    form.addEventListener("submit", handleFormSubmit);
    form2.addEventListener("submit", handleFormSubmit2);

    async function handleFormSubmit(_event: Event): Promise<void> {
        _event.preventDefault();
        let url: string = "https://testgisjk.herokuapp.com/html/";
        // let url: string = "http://localhost:8100/html/";
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseValueText: string = await response.text();
        console.log(responseValueText);
        let body: HTMLBodyElement = document.querySelector("body");
        let htmlElment: HTMLParagraphElement = document.createElement("div");
        htmlElment.innerHTML = responseValueText;
        body.appendChild(htmlElment);

    }
    async function handleFormSubmit2(_event: Event): Promise<void> {
        _event.preventDefault();
        let url: string = "https://testgisjk.herokuapp.com/json/";
        // let url: string = "http://localhost:8100/json/";
        let formData: FormData = new FormData(form2);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseValueText: string = await response.json();
        console.log(responseValueText);
    }
}
