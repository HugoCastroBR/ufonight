//Favorites
let FavoritesBtn = document.querySelectorAll(".UfoNight__Result__FavoriteBtn")

FavoritesBtn.forEach(element => {
    element.addEventListener("click", self =>{
        self.preventDefault()
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

//Filters
let FiltersContainer = document.querySelector(".UfoNight__SearchFiltersBox")
let FiltersContainerToggler = document.querySelector(".UfoNight__SearchFiltersBox_Toggle")
let FilterBtnSend = document.querySelector(".FilterSearch__send_form_btn")

FiltersContainerToggler.addEventListener("click",self => {
    self.preventDefault()
    let Changer = document.querySelector(".UfoNight__SearchFiltersBox_Toggle__change")
    if(Changer.classList.contains("UfoNight__SearchFiltersBox_Toggle__change180")){
        Changer.classList.remove("UfoNight__SearchFiltersBox_Toggle__change180")
        FiltersContainer.classList.add("noDisplay")
        FilterBtnSend.classList.add("noDisplay")

    }else{
        Changer.classList.add("UfoNight__SearchFiltersBox_Toggle__change180")
        FiltersContainer.classList.remove("noDisplay")
        FilterBtnSend.classList.remove("noDisplay")
    }
    
    
})



//Pages
let Pages = document.querySelectorAll(".UfoNight__ResultsPageItem")

Pages[1].innerHTML = parseInt(Pages[0].innerHTML) + 1
Pages[2].innerHTML = parseInt(Pages[0].innerHTML) + 2
Pages[3].innerHTML = parseInt(Pages[0].innerHTML) + 3
Pages[4].innerHTML = parseInt(Pages[0].innerHTML) + 9

document.querySelectorAll(".UfoNight__Result__Tag").forEach( element =>{
    element.addEventListener("click",self=>{
        self.preventDefault()
        document.querySelector(".Search_Item_tag").value = self.path[0].innerHTML
        document.querySelector(".UfoNight__Result__TagContainer").submit()
    })
})


 // FETCH API

