import {Router} from "express";

const router=Router();

//Routers
router.get("/",(req,res)=> {
    res.send("Hola mundo desde mongo")
});


router.post("/mutation",async (req,res)=> {
    console.log(req.body);
    let mutations=0;
    for(let index=0;index<req.body.dna.length;index++){
        console.log(new RegExp(/(.)\1{3}/).test(req.body.dna[index])) 
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
    console.log(srt)
    }

    const x={
        statuscode:200,
        haserrors:false,
        data:{
            mutations
        }
    }

    res.send(x)

});


export default router;