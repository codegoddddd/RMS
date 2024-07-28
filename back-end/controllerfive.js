const studentmodalfourth = require('./modalfourth')




//    user functions : ->>>>>>>>>>>

const adduser = async(req,res) =>{
    const {fname,lname,email,password} = req.body;
    
    try{
        const userdata = new studentmodalfourth({
            fname,lname,email,password
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
        const userdata = await studentmodalfourth.find()
        res.status(200).send({userdata})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}






const updateuser = async(req,res) => {
    try{
        const {email} = req.params 
        const {fname,lname,password} = req.body

        const data = await studentmodalfourth.updateOne(
            {email},
            {
                $set : {fname,lname,password}
            }
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
        const {email} = req.params
        
        const data = await studentmodalfourth.deleteOne(
            {email}
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
        const {email} = req.params

        const data = await studentmodalfourth.findOne({email})

        if (data) {
            res.status(200).send({ data, msg: "User found" });
        } else {
            res.status(404).send({ msg: "User not found" }); // Adjust status code to 404 when user is not found
        }
    }
    catch(err){
        console.log(err)
        res.status(400).send({err, msg:"User not found"})
    }
}


module.exports = {adduser,getdata,updateuser,deleteuser,finduser}