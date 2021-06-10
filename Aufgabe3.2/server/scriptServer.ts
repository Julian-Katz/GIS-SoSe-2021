// Importieren von Http Module zur komunikation zwischen Client und Server
import * as Http from "http";
import { ParsedUrlQuery } from "querystring";
import * as url from "url";


export namespace P_3_2Server {
    let server: Http.Server = Http.createServer();
    let port: string | number | undefined = process.env.PORT;
    if (port === undefined) {
        port = 8100;
    }
    server.addListener("request", handleRequest);
    server.listen(port);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        let currentUrl: url.UrlWithParsedQuery = url.parse(_request.url, true);
        let urlData: ParsedUrlQuery = currentUrl.query;
        if ( currentUrl.pathname === "/json/"){
            _response.setHeader("content-type", "text/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(JSON.stringify(urlData));
            
        } else if ( currentUrl.pathname === "/html/"){
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(`E-Mail: ${urlData["e-mail"]} Passwort: ${urlData["password"]}`);

        }
        _response.end();
    }
    

}
