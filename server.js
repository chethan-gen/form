import express from 'express'
const app = express();
app(express.json());

app.get("/",(req,res)=>{
    try {
        return res.status(200).send({message:"pong"})
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"})
    }
})

app.post("/signup",(req,res)=>{
    try {
        const{Username,Email,Password,Dateofbirth}=req.body; 
        if(!Username){
            return res.send("Username cannot be empty")
        }if(!Email){
            return res.send("Email cannot be empty")
        }
        if(CharacterData.Password<8 || CharacterData.Password>16){
           return res.send("The password length should be greater than 8 or less than or equal to 16")
        }
        const User = {
            Username,
            Email,
            Password,
            Dateofbirth
        }
        const newUser = User.save()
        return res.send(newUser)
    } catch (error) {
        return res.status(500).send({message:"Sonmething went wrong"})
    }
})


app.listen(8080,()=>{
    console.log("The server connected successfully");
})

export default app.json();