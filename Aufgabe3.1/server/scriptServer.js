"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
// Importieren von Http Module zur komunikation zwischen Client und Server
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    // Port wird von Umgebung defieniert
    let port = Number(process.env.PORT);
    // Wenn kein Port definiert wurde Standard Port 8100
    if (!port)
        port = 8100;
    // Erstellt Server der Port überwacht
    let server = Http.createServer();
    // Wenn am Port eine Anfrage reinkommt wird handleRequest ausgeführt
    server.addListener("request", handleRequest);
    // Wenn der server den Port überwacht wird handleListen ausgeführt
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        // Header der Server Antwort wird gesetzt
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Schreibt die URL der Anfrage auf Seite
        _response.write("GUten TAgd");
        console.log(`Der Server hat folgendes erhalten: ${_request.url}`);
        // Response beendet
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=scriptServer.js.map