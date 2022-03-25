import express,{json} from "express";
import IndexRoutes from "./routes/index.routes";
import stats from "./routes/stats.routes";

const app=express();

//settings
app.set("port",process.env.PORT || 3000)


//diddleware
app.use(json());


//routers
app.use("/mutation",IndexRoutes);
app.use("/stats",stats);


export default app;