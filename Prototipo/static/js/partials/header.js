
//Menu toggle

const MenuDiv = document.querySelector(".UfoNight__Header__Menu__Profile")//Menu div
const UserPic = document.querySelector(".UfoNight__Header__UserMenuToggle__UserPicImg") //Header User picture
 
UserPic.addEventListener("click",function(){ //add show div when clicked to UserPic
    if(MenuDiv.classList.contains("noDisplay")){
        MenuDiv.classList.remove("noDisplay")
    }else{
        MenuDiv.classList.add("noDisplay")
    }
})

function Logout(){
    document.querySelector("UfoNight__Header__Menu__Item__a__Exit").preventDefault()
    document.querySelector(".Logout__form__logout").submit()
}
//End Menu toggle

