const studentmodalfourth = require('./modalfourth');

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await studentmodalfourth.findOne({ email, password });

//     if (user) {
//       // Include the user's email in the response
//       res.status(200).send({ msg: 'Login successful', email: user.email });
//     } else {
//       res.status(401).send({ msg: 'Invalid email or password' });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ msg: 'Internal Server Error' });
//   }
// };

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log('Login attempt for email:', email);

  try {
    // Find the user by email
    const user = await studentmodalfourth.findOne({ email });
    console.log('User found:', user);

    if (user) {
      // Check if the password matches (simple comparison for now)
      if (user.password === password) {
        // Respond with success and include the user's email
        res.status(200).send({ msg: 'Login successful', email: user.email });
      } else {
        res.status(401).send({ msg: 'Invalid email or password' });
      }
    } else {
      res.status(401).send({ msg: 'Invalid email or password' });
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
};

module.exports = { loginUser };
