import Member from "../model/userSchema.js";


export const addUser = (req, resp)=> {
    const user = req.body;

    const newUser = new Member(user);

    try{
       newUser.save();
      resp.status(201).json(newUser);
    } catch(error) {
      resp.status(409).json({ message: error.message })
    }
}

export const allusers = async (req, resp) => {
  
  try{
    const users = await Member.find({});
    resp.status(201).json(users);
  }catch(error){
resp.status(409).json({message: error.message});
  }
}

export const getUser = async (req, resp) => {
  try{
 //const user = await Member.find({ _id: req.params.id });
 const user = await Member.findById( req.params.id )
 resp.status(201).json(user);
  }catch (error) {
    resp.status(409).json({message: error.message});
  }
}

export const editUser = async (req, resp)=> {
  const user = req.body;

  const editUser = new Member(user);

  try{
     await Member.updateOne({ _id: req.params.id }, editUser)
    resp.status(201).json(editUser);
  } catch(error) {
    resp.status(409).json({ message: error.message })
  }
  // console.log(user);
}

export const deleteUser = async (req,resp) => {
  try {
    var memData = await Member.deleteOne({ _id: req.params.id })
    if (memData) {
      resp.status(200).json("User Deleted Successfully")
    } else {
      resp.status(401).json("Do not have any user")
    }
    
  } catch (error) {
    resp.status(409).json({ message: error.message })
  }
}

export const userLogIn = async (request, response) => {
  try {
      let user = await Member.findOne({ username: request.body.username, password: request.body.password });
      if(user) {
          return response.status(200).json({ data: user });
      } else {
          return response.status(401).json('Invalid Login');
      }

  } catch (error) {
      response.json('Error: ', error.message);        
  }
}