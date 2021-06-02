namespace Aufgabe3_1 {
    let form: HTMLFormElement = document.forms.namedItem("form");
    form.addEventListener("submit", handleFormSubmit);

    async function handleFormSubmit(_event: Event): Promise<any> {
        _event.preventDefault();
        let url: string = "https://testgisjk.herokuapp.com/";
        // let url: string = "http://localhost:8100/";
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseValue: string = await response.text();
        console.log(responseValue);
    }
}
