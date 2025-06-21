import mongoose from "mongoose";
import app from "./app";
import config from "./config";






const boostrap = async () => {

    try {
      await  mongoose.connect(config.database_url!)
        console.log("Sucessfully Connected Database!!")

        
    } catch (error) {
        console.log(error)
        
    }

}

boostrap();


app.listen(config.port, () => {
    console.log(`Express Basic Server Running Test!!`)
});






