import {Router} from "express";
import {connect} from "../database"

const router=Router();

//Routers
router.post("/",async (req,res)=> {
    const _isvalid=await isValid(req);
    if(_isvalid){
        res.send({
            statuscode:200,
            haserrors:false,
            data:"",
            message:"El contenido no cumple con las bases nitrogenadas estas son  (A,T,C,G), favor de verificar nueva mente."
        })
        return;
    }
    const _response=await thereAreChanges(req);

    if(_response.data.mutations==0){
        const db=await connect();
        const _saveDNA={
            dna:req.body.dna,
            date:new Date().toLocaleDateString()
        }
        db.collection("not-mutation").insertOne(_saveDNA);
    }
    if(_response.data.mutations>0){
        const db=await connect();
        const _saveDNA={
            dna:req.body.dna,
            date:new Date().toLocaleDateString(),
            countMutation:_response.data.mutations
        }
        db.collection("mutation").insertOne(_saveDNA);
    }
    res.send(_response)

});

function isValid(req){
    let hasMutation=false;
    for(let index=0;index<req.body.dna.length;index++){ 
        for(let index2=0;index2<req.body.dna.length;index2++){ 
            if(!(new RegExp(/[ACTG]/).test(req.body.dna[index][index2])))
            {
                hasMutation=true;
                return hasMutation;
            }
        }
    }
}

function thereAreChanges(req){
    let mutations=0;
    for(let index=0;index<req.body.dna.length;index++){
        if(new RegExp(/(.)\1{3}/).test(req.body.dna[index]))
        mutations+=1;
    }
    let srt="";
    let index2=0
    for(let index3=0;index3<req.body.dna.length;index3++){
        srt="";
    for(let index=0;index<req.body.dna.length;index++){
        srt=srt+req.body.dna[index][index2]
    }
    if(new RegExp(/(.)\1{3}/).test(srt))
        mutations+=1;
    index2++
    // console.log(srt)
    }

    return {
        statuscode:200,
        haserrors:false,
        data:{
            mutations
        }
    }
}


export default router;