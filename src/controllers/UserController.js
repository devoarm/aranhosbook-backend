const saltRounds = 10;
var jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET_KEY;

const FindUserOne = async (req, res) => {
  let body = req.body;
  try {
    if (body.username == "1279800104069" && body.password == "123") {
      var token = jwt.sign(
        { username: "1279800104069" },
        secret
      );
      return res.json({
        status: 200,
        msg: "success",
        token: token,
      });
    } else {
      return res.json({
        status: 401,
        msg: "no user",
      });
    }
  } catch (error) {
    return res.json({ status: 500, message: body, err: error });
  }
};


module.exports = { login };
