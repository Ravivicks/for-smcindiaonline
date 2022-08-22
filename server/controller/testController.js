 import Test from "../model/testSchema.js";


 export const addTest = (req, resp)=> {
    const test = req.body;

    const newTest = new Test(test);

    try{
        newTest.save();
      resp.status(201).json(newTest);
    } catch(error) {
      resp.status(409).json({ message: error.message })
    }
    // console.log(user);
}