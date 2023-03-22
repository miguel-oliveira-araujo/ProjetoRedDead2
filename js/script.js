function mudar(){
    let img = document.getElementById("img");
    let trocar = Math.trunc(Math.random()*10);
    img.src = "img/" + trocar +".jpg";
}

function trocar(){
    let img3 = document.getElementById("img3");
    let trocar = Math.trunc(Math.random()*2);
    img.src = "img3/foto" + trocar + ".jpg";
}