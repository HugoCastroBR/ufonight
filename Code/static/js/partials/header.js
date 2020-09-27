
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

//End Menu toggle