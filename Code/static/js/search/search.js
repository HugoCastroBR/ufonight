let FavoritesBtn = document.querySelectorAll(".UfoNight__Result__FavoriteBtn")

FavoritesBtn.forEach(element => {
    element.addEventListener("click", self =>{
        console.log(self.path[1].children[0])
        console.log(self.path[1].children[1])
        if(self.path[1].children[0].style.display == "none"){
            self.path[1].children[0].style.display = "block"
            self.path[1].children[1].style.display = "None"
        }else{
            self.path[1].children[0].style.display = "None"
            self.path[1].children[1].style.display = "block"
        }
    })
})


let FiltersContainer = document.querySelector(".UfoNight__SearchFiltersBox")
let FiltersContainerToggler = document.querySelector(".UfoNight__SearchFiltersBox_Toggle")

FiltersContainerToggler.addEventListener("click",() => {
    let Changer = document.querySelector(".UfoNight__SearchFiltersBox_Toggle__change")
    if(Changer.classList.contains("UfoNight__SearchFiltersBox_Toggle__change180")){
        Changer.classList.remove("UfoNight__SearchFiltersBox_Toggle__change180")
        FiltersContainer.classList.add("noDisplay")

    }else{
        Changer.classList.add("UfoNight__SearchFiltersBox_Toggle__change180")
        FiltersContainer.classList.remove("noDisplay")
    }
    
    
})

let Pages = document.querySelectorAll(".UfoNight__ResultsPageItem")

Pages[1].innerHTML = parseInt(Pages[0].innerHTML) + 1
Pages[2].innerHTML = parseInt(Pages[0].innerHTML) + 2
Pages[3].innerHTML = parseInt(Pages[0].innerHTML) + 3
Pages[4].innerHTML = parseInt(Pages[0].innerHTML) + 9