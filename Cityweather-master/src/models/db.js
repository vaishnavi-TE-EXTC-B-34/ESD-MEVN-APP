const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jayraj:jayraj@cluster0.9rxu9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        
    }
       
)
.then(()=>{
    console.log("connection Successfull")
})
.catch((err)=>{   
    console.log("No connection:"+err)
})