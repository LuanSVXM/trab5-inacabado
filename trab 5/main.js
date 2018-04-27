let input = document.querySelector("input");
let url = [];
let o = 0;
let select = document.querySelector("select");
let tocar = document.getElementById("trocar");
let AV= document.querySelector("video");

input.addEventListener("change",function () {
    let name =""
    for (i=12; i < input.value.length ; i++ ) {
        name+=input.value[i];
    }
    url[o] = input.files[0];
    select.innerHTML += `<option>${name}</option>`;
    o++;
}
)

tocar.addEventListener("click",function() {
    if (select.selectedIndex > -1) {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
            AV.src = reader.result;
            AV.play();
        });
        reader.readAsDataURL(url[select.selectedIndex]);
    }




}
)