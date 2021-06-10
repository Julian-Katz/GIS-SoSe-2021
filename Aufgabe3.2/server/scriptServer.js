"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
// Importieren von Http Module zur komunikation zwischen Client und Server
const Http = require("http");
const url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    let server = Http.createServer();
    let port = process.env.PORT;
    if (port === undefined) {
        port = 8100;
    }
    server.addListener("request", handleRequest);
    server.listen(port);
    function handleRequest(_request, _response) {
        let currentUrl = url.parse(_request.url, true);
        let urlData = currentUrl.query;
        if (currentUrl.pathname === "/json/") {
            _response.setHeader("content-type", "text/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(JSON.stringify(urlData));
        }
        else if (currentUrl.pathname === "/html/") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(`E-Mail: ${urlData["e-mail"]} Passwort: ${urlData["password"]}`);
        }
        _response.end();
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=scriptServer.js.map