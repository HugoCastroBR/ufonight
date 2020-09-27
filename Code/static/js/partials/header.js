
//Menu toggle
const MenuDiv = document.querySelector(".UfoNight__Header__Menu__Profile")
const UserPic = document.querySelector(".UfoNight__Header__UserMenuToggle__UserPicImg")
UserPic.addEventListener("click",function(){
    if(MenuDiv.classList.contains("noDisplay")){
        MenuDiv.classList.remove("noDisplay")
    }else{
        MenuDiv.classList.add("noDisplay")
    }
})