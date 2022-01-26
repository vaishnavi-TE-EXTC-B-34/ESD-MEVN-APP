const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const port=process.env.PORT || 8000

app.use(express.json())
// app.use(cookieparser())

app.use(express.static(path.join(__dirname,"../public"))) //very imp
const template_path =path.join(__dirname,"../templates/views")
const partial_path =path.join(__dirname,"../templates/partials")

require("./models/db")
const User=require("./models/User")

app.set("view engine","hbs")
app.set("views",template_path)
hbs.registerPartials(partial_path)


app.get("/",(req,res)=>{
    res.render("login")
})
app.get("/register",(req,res)=>{
    res.render("register")
})

app.get("/home",(req,res)=>{
    res.render("index")
})
app.get("/whether",(req,res)=>{
    res.render("whether")
})
app.get("*",(req,res)=>{
    res.render("error",{
        error:"Oops !!! Page Not Fount" 
    })
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})

app.post("/register", async (req, res) => {
    try {
        // console.log("hiii")
        const { name, email, password } = req.body

        if (!name || !email ||  !password) {
            return res.status(422).json({ err: "PLz fill all the field properties " })
        }
        else {
            const userExist = await User.findOne({ $or: [{ email: email }] })
            if (userExist) {
                return res.status(422).json({ err: "Email already exists" })
            }
            else {
                const user = new User({ name, email, password })
                await user.save()
                return res.status(201).json({ msg: "Registered Successfully" })
            }
        }

    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "plz fill data correclty" })
    }
})



app.post("/login", async (req, res) => {
    try {
        console.log("hiii")
        const { email, password} = req.body
        if (!email || !password) {
            return res.status(400).json({ err: "plz fill the data" })
        }
        else {
            const userLogin = await User.findOne({ email: email })
            if (userLogin ) {
                
                if (password!=userLogin.password) {
                    return res.status(400).json({ err: "InValid credential" })
                }
                return res.status(201).json({ msg: "login successfully"})
            }
            else {
                return res.status(400).json({ err: "InValid credential" })
            }
        }
    }
    catch (err) {
        console.log("Error in login" + err)
    }
})


