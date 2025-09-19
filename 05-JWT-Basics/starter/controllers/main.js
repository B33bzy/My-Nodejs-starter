//check username and password in post(/login) request
//if exist craete new JWT
//send back to front end
//setup authentication so only the request with JWT can access the dashboard 

const jwt = require('jsonwebtoken');
const {BadRequestError} = require('../errors');

const login =  async (req,res) => {
  const {username,password} = req.body
  //mongoose required validation (only works when connected to database)
  //Joi
  //check in the controller

  if(!username || !password){
    throw new BadRequestError('Please provide username and password')
  } 
  //just for demo,  normally handled/provided by the DB
  const id = new Date().getDate();

  //try to keep payloads small, better experience for users
  //just for demo, in production use long, complex and unguessable string value
  const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn: '30d'})

  res.status(200).json({msg: 'user created', token})
}


const dashboard = async (req, res)=>{
  console.log(req.user);
  
 
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({msg:`Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`});
  
}

module.exports = {
  login,
  dashboard
}