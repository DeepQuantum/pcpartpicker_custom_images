document.body.style.border = "5px solid red";

loadImages = () => {
    image_anchors = document.querySelectorAll(".tr__product:not(.tr__product--another)>.td__image>a[href='#view_custom_part']");
    image_anchors.forEach((image_anchor) => {
        id = image_anchor.getAttribute("onclick").split("'")[1].split("-")[0];
        image_url = localStorage.getItem(id);
        if (image_url) {
            image_anchor.childNodes[0].setAttribute("src", image_url);
            console.log("added image")
        }
        else {
            console.log("couldnt load image " + image_url)
        }
    })
}

loadImages();

add_image_url_field = document.createElement('li');
add_image_url_field.innerHTML = "<label class='show'>Custom Image URL: </label><input id='add_custom_image' name='image_url' type='text' maxlength='4096'></input>"

button = document.getElementById("add_custom_submit")
button.addEventListener("click", () => {
    id = document.getElementById("add_custom_id").getAttribute("value");
    url = document.getElementById("add_custom_image").value;
    localStorage.setItem(id, url);
})

dialog = document.getElementById("partlist_upp_dialog")
list = dialog.querySelector("#partlist_upp_dialog_manual_entry_form>form>ul")
list.appendChild(add_image_url_field);
