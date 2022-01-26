const regBtn=document.getElementById("register")
const username=document.getElementById("reg_name")
const email=document.getElementById("reg_email")
const password=document.getElementById("reg_password")

regBtn.addEventListener("click",()=>{
    Register(username.value,email.value,password.value)
    
})




const Register = async (name,email,password) => {
    try {
        // e.preventDefault()
        const result = await fetch(("/register"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                name,email,password
            })
        })
        // 
        const data = await result.json()
        if (result.status !== 201 || !data) {
            console.log(data.err)
            window.alert(data.err); 
        }
        else {
            console.log("yup")
            alert("Registeration Successful")
            history.push("/")
        }

    } catch (err) {
        console.log("Error in client Registeration")
    }
}