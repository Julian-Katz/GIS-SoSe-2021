namespace Aufgabe3_1 {
    let form: HTMLFormElement = document.forms.namedItem("form");
    form.addEventListener("submit",  async function(_event) {
        _event.preventDefault();
        let url: string = "https://testgisjk.herokuapp.com/";
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseValue: Response = await response;
        console.log(responseValue);
        
        
    });
}