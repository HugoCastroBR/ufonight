//Manage login and register Form 
const LoginForm = document.querySelector(".UfoNight__Login__Form__Enter")
const RegisterForm = document.querySelector(".UfoNight__Login__Form__Register")
const LoginFormSelectBtn = document.querySelector("#ButtonSelected__Login")
const RegisterFormSelectBtn = document.querySelector("#ButtonSelected__Register")
const UnderBorderSelectedBtn = document.querySelector(".UfoNight__Login__ButtonSelectedUnder")

LoginFormSelectBtn.addEventListener("click",function(){
    if(LoginForm.classList.contains("noDisplay")){
        LoginForm.classList.remove("noDisplay")
    }
    
    if(UnderBorderSelectedBtn.classList.contains("UfoNight__Login__ButtonSelectedUnder-RegisterSelected")){
        UnderBorderSelectedBtn.classList.remove("UfoNight__Login__ButtonSelectedUnder-RegisterSelected")
    }

    RegisterForm.classList.add("noDisplay")
    UnderBorderSelectedBtn.classList.add("UfoNight__Login__ButtonSelectedUnder-LoginSelected")
    
})

RegisterFormSelectBtn.addEventListener("click",function(){
    if(RegisterForm.classList.contains("noDisplay")){
        RegisterForm.classList.remove("noDisplay")
    }
    
    if(UnderBorderSelectedBtn.classList.contains("UfoNight__Login__ButtonSelectedUnder-LoginSelected")){
        UnderBorderSelectedBtn.classList.remove("UfoNight__Login__ButtonSelectedUnder-LoginSelected")
    }

    LoginForm.classList.add("noDisplay")
    UnderBorderSelectedBtn.classList.add("UfoNight__Login__ButtonSelectedUnder-RegisterSelected")
    
})

