// Importieren von Http Module zur komunikation zwischen Client und Server
import * as Http from "http";


export namespace P_3_1Server {
    console.log("Starting server");
    // Port wird von Umgebung defieniert
    let port: number = Number(process.env.PORT);
    // Wenn kein Port definiert wurde Standard Port 8100
    if (!port)
        port = 8100;
    // Erstellt Server der Port überwacht
    let server: Http.Server = Http.createServer();
    // Wenn am Port eine Anfrage reinkommt wird handleRequest ausgeführt
    server.addListener("request", handleRequest);
    // Wenn der server den Port überwacht wird handleListen ausgeführt
    server.addListener("listening", handleListen); 
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        // Header der Server Antwort wird gesetzt
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Schreibt die URL der Anfrage auf Seite
        _response.write("Die Daten wurden an den Server übertragen.");
        console.log(`Der Server hat folgendes erhalten: ${_request.url}`);
        
        // Response beendet
        _response.end();  
    }
}
