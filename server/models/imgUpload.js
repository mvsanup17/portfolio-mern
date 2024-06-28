import mongoose from "mongoose";

const Schema = mongoose.Schema;

let imgUpload = new Schema(
    {
        image:String
    }
)

export default mongoose.model("portfolioimgs", imgUpload)