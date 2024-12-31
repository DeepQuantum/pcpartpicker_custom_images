document.body.style.border = "5px solid red";

loadImages = () => {
    custom_products = document.querySelectorAll(".tr__product:not(.tr__product--another):has(.td__name>a[href='#view_custom_part'])");
    custom_products.forEach((p) => {
        part_name = p.querySelector(".td__name").innerText.replace(/[^\x00-\x7F]/g, "");
        image_url = localStorage.getItem(part_name);
        if (image_url) {
            p.querySelector(".td__image>a>img").setAttribute("src", image_url);
            console.log("added image")
        }
        else {
            console.log("couldnt load image " + part_name)
        }
    })
}

loadImages();

add_image_url_field = document.createElement('li');
add_image_url_field.innerHTML = "<label class='show'>Custom Image URL: </label><input id='add_custom_image' name='image_url' type='text' maxlength='4096'></input>"

button = document.getElementById("add_custom_submit")
button.addEventListener("click", () => {
    part_name = document.getElementById("add_custom_name").value.replace(/[^\x00-\x7F]/g, "");
    url = document.getElementById("add_custom_image").value;
    console.log(part_name, url);
    localStorage.setItem(part_name, url);
})

dialog = document.getElementById("partlist_upp_dialog")
list = dialog.querySelector("#partlist_upp_dialog_manual_entry_form>form>ul")
list.appendChild(add_image_url_field);
