const studentmodalthird = require('./modalthird') 





const adduser = async(req,res) =>{
    const { ROLL,NAME,DS,WT,AI,CC,INTERN,percent} = req.body;
    
    try{
        const userdata = new studentmodalthird({
            ROLL,NAME,DS,WT,AI,CC,INTERN,percent
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
        const userdata = await studentmodalthird.find()
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
        const{NAME,DS,WT,AI,CC,INTERN,percent}=req.body

        const data =await studentmodalthird.updateOne(
            {ROLL},{$set:{NAME,DS,WT,AI,CC,INTERN,percent}}
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
        
        const data = await studentmodalthird.deleteOne(
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

        const data = await studentmodalthird.findOne({ROLL})

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