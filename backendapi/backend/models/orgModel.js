const mongoose=require("mongoose");

const orgSchema=mongoose.Schema(
    {
        orgName:{
            type:String,
            required:[true,"please add orgName"]
        },
        userName:{
            type:String,
            required:[true,"please add userName"]
        },
        //
        email:{
            type:String,
            required:[true,"please add email"]
        },
        mobile:{
            type:Number,
            required:[true,"please add mobile"]
        },
        password:{
            type:String,
            required:[true,"please add password"]
        },
        Roles:{
            type:String,
            required:[true,"please add Roles"]
        },
    },
    {
        timestamps:true
    }
)


const Org=mongoose.model("Org",orgSchema)

module.exports=Org