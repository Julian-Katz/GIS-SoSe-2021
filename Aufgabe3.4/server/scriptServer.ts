import * as Http from "http";
import { ParsedUrlQuery } from "querystring";
import * as url from "url";
import * as Mongo from "mongodb";

export namespace P_3_4Server {
    let startArgument: string[] = process.argv.slice(2);
    let databaseUrl: string;
    switch (startArgument[0]) {
        case "remote":
            databaseUrl = "mongodb+srv://user:12345@gis-ist-geil.wwlee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
            break;
        case "local":
            databaseUrl = "mongodb://localhost:27017";
            break;
        default:
            databaseUrl = "mongodb://localhost:27017";
    }
    
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options);
    async function connecttoDatabase(): Promise<void> {
        await mongoClient.connect();
        console.log(`DB connected url: ${databaseUrl}`);
    }
    connecttoDatabase();

    let server: Http.Server = Http.createServer();
    let port: string | number | undefined = process.env.PORT;
    if (port === undefined) {
        port = 8100;
    }
    server.addListener("request", handleRequests);
    server.listen(port);

    async function handleRequests(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        let currentUrl: url.UrlWithParsedQuery = url.parse(_request.url, true);
        let urlData: ParsedUrlQuery = currentUrl.query;
        
        if (currentUrl.pathname === "/getData") {
            _response.setHeader("content-type", "text/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            let formDb: Mongo.Collection = mongoClient.db("Form").collection("Submits");
            let cursor: Mongo.Cursor = formDb.find();
            let formSubmits: FormData[] = await cursor.toArray();
            _response.write(JSON.stringify(formSubmits));
            _response.end();

        } else if (currentUrl.pathname === "/") {
            _response.setHeader("content-type", "text/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            let formSubmits: Mongo.Collection = mongoClient.db("Form").collection("Submits");
            formSubmits.insertOne(urlData);
            _response.write(`In Datenbank geschrieben: ${JSON.stringify(urlData)}`);
            _response.end();
        }
        
    }
}
