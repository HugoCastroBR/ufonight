let FavoritesBtn = document.querySelectorAll(".UfoNight__Result__FavoriteBtn")

FavoritesBtn.forEach(element => {
    element.addEventListener("click", self =>{
        console.log(self.path[1].children[0])
        if(self.path[1].children[0].classList.contains("noDisplay")){
            self.path[1].children[0].classList.remove("noDisplay")
            self.path[1].children[1].classList.add("noDisplay")
        }else{
            self.path[1].children[0].classList.add("noDisplay")
            self.path[1].children[1].classList.remove("noDisplay")
        }
    })
})