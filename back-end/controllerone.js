const studentmodal = require('./modal') 




const adduser = async(req,res) =>{
    const { NAME,ROLL,FDS,CG,DELD,OOP,DM,percent} = req.body;
    
    try{
        const userdata = new studentmodal({
           NAME,ROLL,FDS,CG,DELD,OOP,DM,percent
        })

        const data = userdata.save()
        res.status(200).send({data})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}
const getdata = async(req,res) => {
    try{
        const userdata = await studentmodal.find()
        res.status(200).send({userdata})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}


const updateuser = async(req,res) => {
    try{
        const {ROLL}= req.params
        const{NAME,FDS,CG,DELD,OOP,DM,percent}=req.body

        const data =await studentmodal.updateOne(
            {ROLL},{$set:{NAME,FDS,CG,DELD,OOP,DM,percent}}
        )

        if(data.modifiedCount > 0){
            res.status(200).send({msg : "Data updated successfully"})
        }
        else{
            res.status(400).send({msg : "Data not updated successfully"})
        }
    }
    catch(err){
        console.log(err)
        res.status(400).send({msg : "User not found"})
    }
}

const deleteuser = async(req,res) => {

    try{
        const {ROLL} = req.params
        
        const data = await studentmodal.deleteOne(
            {ROLL}
        )

        res.status(200).send({msg : "User deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(400).send({msg : "User not deleted successfully"})
    }
}
const finduser = async(req,res) => {
    try{
        const {ROLL} = req.params

        const data = await studentmodal.findOne({ROLL})

        if (data) {
            res.status(200).send({ data, msg: "User found" });
        } else {
            res.status(404).send({ msg: "User not found" }); // Adjust status code to 404 when user is not found
        }
    }
    catch(err){
        console.log(err)
        res.status(400).send({err,msg:"User not found"})
    }
}


module.exports = {adduser,getdata,updateuser,deleteuser,finduser}