import {MongoClient} from "mongodb"; //Importamos la libreria de mongoDb

export async function connect(){
    try {
        const claint=await MongoClient.connect("mongodb://localhost:27017"); //coneccion para la base de datos
        const db=claint.db("mutation");
        console.log("Db is connected.")
        return db 
    } catch (error) {
       console.log(error);
    }
}

 