const mongoose = require('mongoose');
const url ="mongodb+srv://kabil:1996@cluster0.rmk6c.mongodb.net/testServerDB?retryWrites=true&w=majority"

const connectDB = async()=>{
    try {
        const con = await mongoose.connect(url);
        console.log(`mongoDB Connected: ${con.connection.host}`);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;