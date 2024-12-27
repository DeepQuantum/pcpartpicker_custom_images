document.body.style.border = "5px solid red";

add_image_url_field = document.createElement('li');
add_image_url_field.innerHTML = "<label class='show'>Custom Image URL: </label><input id='add_custom_image' name='image_url' type='text' maxlength='4096'></input>"

button = document.getElementById("add_custom_submit")
button.addEventListener("click", () => {
    id = document.getElementById("add_custom_id").getAttribute("value");
    url = document.getElementById("add_custom_image").value;
    storeImage(id, url);
})

dialog = document.getElementById("partlist_upp_dialog")
list = dialog.querySelector("#partlist_upp_dialog_manual_entry_form>form>ul")
list.appendChild(add_image_url_field);
