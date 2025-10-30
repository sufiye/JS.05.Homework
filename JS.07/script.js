const registernameinput = document.getElementById("registernameinput")
const registerlastnameinput = document.getElementById("registerlastnameinput")
const registeremailinput = document.getElementById("registeremailinput")
const registerpasswordinput = document.getElementById("registerpasswordinput")

const registerbtninput = document.getElementById("registerbtninput")


const registerUser = async()=>{
 try {
    const res = await fetch("https://ilkinibadov.com/api/v1/auth/signup",{
        method:"POST",
        body:JSON.stringify({
         
                firstname: registernameinput.value,
                lastname: registerlastnameinput.value,
                email: registeremailinput.value,
                password: registerpasswordinput.value
              
           
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })

    const data = await res.json()
    console.log(data);
    
    
    } 
     catch (error) {
         console.error(error)
     }

}


registerbtninput?.addEventListener("click",registerUser)


const loginemailinput = document.getElementById("loginemailinput")
const loginpasswordinput = document.getElementById("loginpasswordinput")

const  loginbtn= document.getElementById("loginbtn")



const loginUser = async()=>{
    try {
       const res = await fetch("https://ilkinibadov.com/api/v1/auth/login",{
           method:"POST",
           body:JSON.stringify({
                    
                   email: loginemailinput.value,
                   password: loginpasswordinput.value
                 
              
           }),
           headers:{
               "Content-Type":"application/json"
           }
       })
   
       const data = await res.json()
       console.log(data);
       if  (res.ok){

        window.location.href = "http://127.0.0.1:5500/index.html"

       }else{
        alert(data.error)
        
       }

       } 
        catch (error) {
        console.error(error)
        }
   
   }

   loginbtn.addEventListener("click",loginUser);