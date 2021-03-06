import feathers from "@feathersjs/feathers";
import fAuthClient from "@feathersjs/authentication-client";
const fRest = require("@feathersjs/rest-client");

const app = feathers();
//Api'et på onlineservern. 
const fRestClient = fRest("https://int.bytapension.se/api/v1" );
app.configure(fRestClient.fetch(window.fetch));
app.configure(fAuthClient({ storage: window.localStorage, timeout: 800000 }));


export default app;
