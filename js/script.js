function mudar(){
    let img = document.getElementById("img");
    let trocar = Math.trunc(Math.random()*16);
    img.src = "img/" + trocar +".jpg";
}
function trocar(){
    let img = document.getElementById("img2");
    let trocar = Math.trunc(Math.random()*2);
    img.src = "img3/foto" + trocar +".png";
}