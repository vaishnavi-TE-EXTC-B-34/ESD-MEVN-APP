const logBtn=document.getElementById("login")
const log_email=document.getElementById("log_email")
const log_password=document.getElementById("log_password")


logBtn.addEventListener("click",()=>{
Login(log_email.value,log_password.value)
    
})


const Login = async (email,password) => {
    try {
       
        // const { email, password } = user;
        const result = await fetch(("/login"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await result.json();
        if (result.status !== 201) {
            alert(data.err)
        }
        else {
            alert(data.msg ? data.msg : "Login Successfull")
            location.assign("/home")
        }
    }
    catch (err) {
        console.log("Error in Login") 
    }
}

