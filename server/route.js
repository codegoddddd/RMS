const express = require('express')

const studentcontroller1 = require('./controllerone')
const studentcontroller2 = require('./controllertwo')
const studentcontroller3 = require('./controllerthree')
const studentcontroller4 = require('./controllerfour')
const studentcontroller5 = require('./controllerfive')
const { loginUser } = require('./controllerlogin');



const route = express.Router()

// Middleware to handle CORS preflight requests for specific routes
route.options('/register', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://rms-t48e.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.sendStatus(204); // No Content
});


// Routes for 2nd Year 1st Semester
route.post('/secondyear1',studentcontroller1.adduser)
route.get('/secondyear1marks',studentcontroller1.getdata)
route.put('/updatestudentSE1/:ROLL',studentcontroller1.updateuser)
route.delete('/deletestudentSE1/:ROLL',studentcontroller1.deleteuser)
route.get('/findstudentSE1/:ROLL',studentcontroller1.finduser)




// Routes for 2nd Year 2nd Semester
route.post('/secondYear2',studentcontroller2.adduser)
route.get('/secondyear2marks',studentcontroller2.getdata)
route.put('/updatestudentSE2/:ROLL',studentcontroller2.updateuser)
route.delete('/deletestudentSE2/:ROLL',studentcontroller2.deleteuser)
route.get('/findstudentSE2/:ROLL',studentcontroller2.finduser)


// Routes for 3rd Year 1st Semester
route.post('/thirdYearfirst',studentcontroller3.adduser)
route.get('/thirdyearfirstmarks',studentcontroller3.getdata)
route.put('/updatestudentTE1/:ROLL',studentcontroller3.updateuser)
route.delete('/deletestudentTE1/:ROLL',studentcontroller3.deleteuser)
route.get('/findstudentTE1/:ROLL',studentcontroller3.finduser)


// Routes for 3rd Year 2nd Semester
route.post('/thirdYear2',studentcontroller4.adduser)
route.get('/thirdyear2marks',studentcontroller4.getdata)
route.put('/updatestudentTE2/:ROLL',studentcontroller4.updateuser)
route.delete('/deletestudentTE2/:ROLL',studentcontroller4.deleteuser)
route.get('/findstudentTE2/:ROLL',studentcontroller4.finduser)



// User routes -------->>>>>>>>>>

route.put('/update/:email',studentcontroller5.updateuser)
route.delete('/delete/:email',studentcontroller5.deleteuser)
route.get('/findone/:email',studentcontroller5.finduser)
route.get('/test/:email', (req, res) => {
    const { email } = req.params;
    res.send(`Received email: ${email}`);
  });

route.post('/register',studentcontroller5.adduser)
route.get('/findall',studentcontroller5.getdata)

route.post('/login', loginUser);    // Login route

module.exports = route
