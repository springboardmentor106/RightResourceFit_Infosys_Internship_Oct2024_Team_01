import mongoose,{Schema} from 'mongoose';

const UserSchema= mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true

        },
        profileImage:{
            type:String,
            required:false,
            default:"data:image/jpeg;base64,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"

        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        roles:{
            type:[Schema.Types.ObjectId],
            required:true,
            ref:"Role"
        }
        //will add role
    },
    {
        timestamps:true
    }
);



export default mongoose.model("User",UserSchema);