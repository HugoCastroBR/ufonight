/*tslint:disabled*/

let img = document.querySelector(".NewPost__Post_head__picture__upload_preview")

document.querySelector(".NewPost__Post_head__picture__upload_input").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        img.src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
    img.classList.remove("NewPost__Post_head__picture__upload_preview_off")
    img.classList.add("NewPost__Post_head__picture__upload_preview_on")
}






