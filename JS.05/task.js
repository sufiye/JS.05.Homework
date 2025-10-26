const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")

const send = document.getElementById("send")

send.addEventListener("click",(e) =>{
        e.preventDefault()

    const info= {
    firstname:firstname.value,
    lastname:lastname.value,
    email:email.value,
    password:password.value
  };

  console.log(info);
  

})

const eyeBtn = document.getElementById("eyeBtn")
const eyeOpen = document.getElementById("eyeOpen")
const eyeClose = document.getElementById("eyeClose")


eyeBtn.addEventListener("click",()=>{
     
    

})