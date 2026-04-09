const checkbox = document.getElementById("checkbox");
const elements = document.querySelectorAll(".rom");

document.getElementById("checkbox").checked = true;

checkbox.addEventListener("change", e => {
    if (document.getElementById('checkbox').checked) {
        elements.forEach(element => {
            element.style.display = 'block';
        });
    } else {
        elements.forEach(element => {
            element.style.display = 'none';
        });
    }
})
