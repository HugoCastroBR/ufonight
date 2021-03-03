class Type_button{

    /// HTML CODE:

    // <div class="Main__Types_button_preset" id="Active_type">
    //     <button class="head__Main__button_preset button_preset_false button_preset_the_selected">Text_false</button>
    //     <button class="head__Main__button_preset button_preset_true">Text_true</button>
    //     <span class="Main__Types_button_preset-text-result">True</span>
    // </div>

    get_true_or_false_element(to_scan,preset ){ // Get the element children of the element to_scan which contains the "preset" class
        let result = null
        Array.prototype.forEach.call(to_scan.children, (element => {
            if(element.classList.contains(preset)){
                result = element
            }
        }))
        return result
    }

    constructor(element_id){
        this.item = document.querySelector(`#${element_id}`)
        this.false_value = this.get_true_or_false_element(this.item,"button_preset_false")
        this.true_value = this.get_true_or_false_element(this.item,"button_preset_true")
        this.span_result = this.get_true_or_false_element(this.item,"Main__Types_button_preset-text-result")
        this.selected = false

        function to_do_click(e){ // Change the Css based on _toggleSelected
            if (e._toggleSelected()){
                e.false_value.classList.remove("button_preset_the_selected")
                e.true_value.classList.add("button_preset_the_selected")
            }else{
                e.false_value.classList.add("button_preset_the_selected")
                e.true_value.classList.remove("button_preset_the_selected")
            }
        }
        this.false_value.addEventListener("click",event => { // Add the click function which says what to do when get clicked
            event.preventDefault()
            if(this.selected != false){
                to_do_click(this) // 
            }
        })
        this.true_value.addEventListener("click",event => { // Add the click function which says what to do when get clicked
            event.preventDefault()
            if(this.selected != true){
                to_do_click(this)
            }
        })
    }

    _toggleSelected(){ // Change the selection bool
        this.selected = this.selected?false:true
        return this.selected
        
    }
}

document.querySelectorAll(".Main__Types_button_preset").forEach(element => { // create a new element based in class
    new Type_button(element.id) 

})