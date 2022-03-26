import express,{json} from "express";
import IndexRoutes from "./routes/index.routes";
import stats from "./routes/stats.routes";
import list from "./routes/list.routes";

const app=express();

//settings
app.set("port",process.env.PORT || 3000)


//diddleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(json());


//routers
app.use("/mutation",IndexRoutes);
app.use("/stats",stats);
app.use("/list",list);




export default app;