import mongoose from "mongoose";


const Connection = async(username, password) => {
    const URL = `mongodb://${username}:${password}@ecomm-web-shard-00-00.iuiye.mongodb.net:27017,ecomm-web-shard-00-01.iuiye.mongodb.net:27017,ecomm-web-shard-00-02.iuiye.mongodb.net:27017/?ssl=true&replicaSet=atlas-w0uuzw-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
   await mongoose.connect(URL, { useUniFiedTopology: true, useNewUrlParser: true });
   console.log('database connected successfully');
    } catch(error) {
        console.log('error while connecting database', error);
    }

}

export default Connection;