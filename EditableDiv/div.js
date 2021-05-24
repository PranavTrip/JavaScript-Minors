let divElem = document.getElementById("div");
let val = localStorage.getItem("text");
let text;
if (val == null) {
    text = document.createTextNode("Click here to edit");
} else {
    text = document.createTextNode(val);
}
divElem.appendChild(text);
divElem.addEventListener("click", function (element) {
    let noTextArea = document.getElementsByClassName("textarea").length;
    if (noTextArea == 0) {
        let html = element.innerHTML;
        divElem.innerHTML = `<textarea class="form-control textarea" id="textarea" >${html}</textarea>`;
    }
    let textarea = document.getElementById("textarea");
    textarea.addEventListener("blur", function () {
        element.innerHTML = textarea.value;
        localStorage.setItem("text", textarea.value);
    });
});
