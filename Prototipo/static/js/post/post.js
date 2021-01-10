const FavsBTns = document.querySelectorAll(".Post__MainInfos_FavoriteBtn")
const FavBtn = document.querySelector(".FavoriteBtn")
const inFavBtn = document.querySelector(".InFavoriteBtn")

FavsBTns.forEach(element =>{
    element.addEventListener("click",self => {
        self.preventDefault()
        if(self.path[1].classList.contains("FavoriteBtn")){
            FavBtn.style.display = "none"
            inFavBtn.style.display = "block"
        }
        else{
            FavBtn.style.display = "block"
            inFavBtn.style.display = "none"
        }
    })
})