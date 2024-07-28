const studentmodalfourth = require('./modalfourth');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await studentmodalfourth.findOne({ email, password });

    if (user) {
      // Include the user's email in the response
      res.status(200).send({ msg: 'Login successful', email: user.email });
    } else {
      res.status(401).send({ msg: 'Invalid email or password' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
};

module.exports = { loginUser };
