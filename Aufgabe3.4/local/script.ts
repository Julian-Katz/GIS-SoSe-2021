
namespace Aufgabe3_4 {
    let form: HTMLFormElement = document.forms.namedItem("form");
    form.addEventListener("submit", handleFormSubmit);

    async function handleFormSubmit(_event: Event): Promise<void> {
        _event.preventDefault();
        let url: string = "https://testgisjk.herokuapp.com/";
        // let url: string = "http://localhost:8100/";
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseValueText: string = await response.text();
        console.log(responseValueText);
    }

    let btnGetData: HTMLElement = document.getElementById("get-data");
    btnGetData.addEventListener("click", handleBtnGetData);
    
    async function handleBtnGetData(_event: Event): Promise<void> {
        let url: string = "https://testgisjk.herokuapp.com/getData";
        // let url: string = "http://localhost:8100/getData";
        let response: Response = await fetch(url);
        let responseValues: FormData[] = await response.json();
        let dataDropArea: HTMLElement = document.getElementById("loaded-data");
        dataDropArea.innerHTML = "";
        responseValues.forEach(responseValue => {
            let htmtlElment: HTMLElement = document.createElement("p");
            htmtlElment.innerHTML = `DB_ID: ${responseValue["_id"]}, e-mail: ${responseValue["e-mail"]}, Name: ${responseValue["name"]}, Nachricht: ${responseValue["message"]}, consent: ${responseValue["consent"]}`;
            dataDropArea.appendChild(htmtlElment)
         });
    }
}

