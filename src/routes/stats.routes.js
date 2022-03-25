import { Router } from "express";
import { connect } from "../database"

const router = Router();

router.get("/", async (req, res) => {
    const db = await connect();
    const _responseNotMutation = await db.collection("not-mutation").find({}).toArray();
    const _responseMutation = await db.collection("mutation").find({}).toArray();
    res.send({
        statuscode: 200,
        haserrors: false,
        data: {
            count_mutations: _responseMutation.length,
            count_no_mutation: _responseNotMutation.length,
            ratio: (_responseMutation.length / _responseNotMutation.length)
        }
    });
});

export default router;