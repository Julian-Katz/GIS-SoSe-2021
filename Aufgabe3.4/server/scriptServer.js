"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var P_3_4Server;
(function (P_3_4Server) {
    let startArgument = process.argv.slice(2);
    let databaseUrl;
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
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(databaseUrl, options);
    async function connecttoDatabase() {
        await mongoClient.connect();
        console.log(`DB connected url: ${databaseUrl}`);
    }
    connecttoDatabase();
    let server = Http.createServer();
    let port = process.env.PORT;
    if (port === undefined) {
        port = 8100;
    }
    server.addListener("request", handleRequests);
    server.listen(port);
    async function handleRequests(_request, _response) {
        let currentUrl = url.parse(_request.url, true);
        let urlData = currentUrl.query;
        if (currentUrl.pathname === "/getData") {
            _response.setHeader("content-type", "text/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            let formDb = mongoClient.db("Form").collection("Submits");
            let cursor = formDb.find();
            let formSubmits = await cursor.toArray();
            _response.write(JSON.stringify(formSubmits));
            _response.end();
        }
        else if (currentUrl.pathname === "/") {
            _response.setHeader("content-type", "text/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            let formSubmits = mongoClient.db("Form").collection("Submits");
            formSubmits.insertOne(urlData);
            _response.write(`In Datenbank geschrieben: ${JSON.stringify(urlData)}`);
            _response.end();
        }
    }
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
//# sourceMappingURL=scriptServer.js.map