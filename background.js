
let add_custom_submit = document.getElementById("add_custom_submit");
let add_custom_form = document.getElementById("partlist_upp_dialog_manual_entry_form");
let dialog = document.getElementById("partlist_upp_dialog");
let list = dialog.querySelector("#partlist_upp_dialog_manual_entry_form>form>ul")
let add_image_url_field = document.createElement('li');

const callback = () => {
    custom_prduct_name = document.getElementById("add_custom_name").value.replace(/[^\x00-\x7F]/g, "");
    image_url = localStorage.getItem(custom_prduct_name);
    if (image_url) {
        console.log(custom_prduct_name, image_url);
        document.getElementById("add_custom_image").value = image_url;
    }
};

const observer = new MutationObserver(callback);
const config = { attributes: true, childList: true, subtree: true };


const loadImages = () => {
    custom_products = document.querySelectorAll(".tr__product:not(.tr__product--another):has(.td__name>a[href='#view_custom_part'])");
    custom_products.forEach((p) => {
        part_name = p.querySelector(".td__name").innerText.replace(/[^\x00-\x7F]/g, "");
        image_url = localStorage.getItem(part_name);
        if (image_url) {
            p.querySelector(".td__image>a>img").setAttribute("src", image_url);
        }
    })
}

const run = () => {
    loadImages();
    add_image_url_field.innerHTML = "<label class='show'>Image URL (optional): </label><input id='add_custom_image' name='image_url' type='text' maxlength='4096'></input>"
    add_custom_submit.addEventListener("click", () => {
        part_name = document.getElementById("add_custom_name").value.replace(/[^\x00-\x7F]/g, "");
        url = document.getElementById("add_custom_image").value;
        localStorage.setItem(part_name, url);
    })
    observer.observe(add_custom_form, config);
    list.appendChild(add_image_url_field);
}

run();