import "@babel/polyfill";

import app from "./server";
import {connect} from "./database";


async function main(){
    await app.listen(app.get("port"));
    await connect();
    console.log("puerto del server",app.get("port"))
}

main();