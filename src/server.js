import express,{json} from "express";
import IndexRoutes from "./routes/index.routes";

const app=express();

//settings
app.set("port",process.env.PORT || 3000)


//diddleware
app.use(json());


//routers
app.use(IndexRoutes);

export default app;