import mongoose from "mongoose";


const connectMongoDb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://kunalsharmaisfromindia:jaidadigauri@cluster0.cxdrk.mongodb.net/");
        console.log(`mongoDb connected `) ;
    } catch (error) {
        console.log("error" ,error)
        process.exit(1);
    }
}

export default connectMongoDb ;
