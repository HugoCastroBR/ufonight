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


// FETCH API

const filtersCheckbox = {

    "tipo_nave":document.querySelectorAll('.Tipo_Nave__check'),
    "especie":document.querySelectorAll('.Tipo_Especie__check'),
    "grau":document.querySelectorAll('.Tipo_Grau__check')

}


function clearCheckBox(box){
    box.forEach(element => {
        element.checked = false
    })
    filters_apply = {}
}

let filters_apply = {

}





Object.values(filtersCheckbox).forEach((element) => {
    element.forEach(e => {
        e.addEventListener("click",() => {
            e.preventDefault
            const parent_id = e.closest('div').id
            const box = filtersCheckbox[parent_id.toLowerCase()]
            if(e.checked){
                clearCheckBox(box)
                e.checked = true
                filters_apply[parent_id] = e.value
            }else{
                clearCheckBox(box)
                e.checked = false
            }
            
        })
    })
})

const filterBtn = document.querySelector(".FilterSearch__send_form_btn")


async function showresults(result){
    const resultsContainer = document.querySelector(".UfoNight__ResultsContainer")
    resultsContainer.innerHTML = ''
    result.forEach(element =>{
        console.log(element)
        const resultHTML = `
    
        <div class="UfoNight__Result__ItemBoxContainer">
                        <a class="UfoNight__Result__ImageContainer" href="">
                            <img class="UfoNight__Result__Image" src="" alt="">
                        </a>
                        <div class="UfoNight__Result__AboutContainer">
                            <a href="" class="UfoNight__Result__Title">${element.Titulo}</a>
                            <span class="UfoNight__Result__Desc">${element.descricao}</span>
                        </div>
                        <div class="UfoNight__Result__FavoriteContainer">
                            <button class="UfoNight__Result__FavoriteBtn">
                                <img class="UfoNight__Result__NotFavoriteImg" src="../../static/img/star_border_white.svg" alt="Favorite">
                                <img class="UfoNight__Result__FavoriteImg noDisplay" src="../../static/img/star_white.svg" alt="Favorite">
                            </button>
                        </div>
                    </div>
        
        `

        resultsContainer.innerHTML += resultHTML


    })



}

filterBtn.addEventListener("click", async element => {
    element.preventDefault
    console.log(JSON.stringify(filters_apply))
    let res = ''
    
    // res = await fetch('http://localhost:3000/search?search=teste')

    res = await fetch('http://localhost:3000/search?search=teste',{
        mode:'cors',
        method: "POST",
        headers: new Headers({
            'Vary': 'Origin',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }),
        
        body: `${JSON.stringify(filters_apply)}`
    })
    
    resJson = await res.json()
    console.log(resJson["results"])
    showresults(resJson["results"])
})