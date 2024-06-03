import mongoose , {Document , Schema} from "mongoose";


export interface  Message extends Document {
    content : string ;
    createdAt : Date
}
const MessageSchema : Schema<Message> = new Schema({
    content : {
        type: String,
        required : true
    },
    createdAt: {
        type:Date,
        required : true,
        default : Date.now
    }
})

export interface User extends Document{
    username : string;
    email:string;
    password : string;
    verifyCode : string;
    verifyCodeExpiry : Date;
    isVerified : boolean;
    isAceptingMessage: boolean;
    message: Message[];

}

const userSchema : Schema <User> = new Schema({
    username : {
        type:String,
        required : [true , "username is required"],
        trim : true,
        unique : true
    },
    email:{
        type:String,
        required:[true,'emailis required'],
        unique : true,
        match:[/.+\@.+\..+/ ,'please enter a valid email address']
    },
    password:{
        type : String,
        required :[true,'password is require']
    },
    verifyCode:{
        type:String,
        required : [true, 'verifycode is required']
    },
    verifyCodeExpiry : {
        type:Date,
        required : [true , 'verify code expire is required']
    },
    isVerified:{
        type:Boolean,
        default : false
    },
    isAceptingMessage:{
        type:Boolean,
        default : true
    },
    message : [MessageSchema],
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) ||mongoose.model<User>("User" , userSchema)

export default UserModel;