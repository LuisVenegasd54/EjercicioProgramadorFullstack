import { Router } from "express";
import { connect } from "../database"

const router = Router();

router.get("/mutations", async (req, res) => {
    const db = await connect();
    const _responseMutation = await db.collection("mutation").find({}).sort({$natural:-1}).limit(10).toArray();
    res.send({
        statuscode: 200,
        haserrors: false,
        data: {
            _responseMutation
        }
    });
})

router.get("/notmutation", async (req, res) => {
    const db = await connect();
    const _responseMutation = await db.collection("not-mutation").find({}).sort({$natural:-1}).limit(10).toArray();
    res.send({
        statuscode: 200,
        haserrors: false,
        data: {
            _responseMutation
        }
    });
})


export default router;