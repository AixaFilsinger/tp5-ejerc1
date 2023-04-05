let numeroMagico = 0;
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', adivinar);
let numMagicoh2 = document.querySelector("h2");
function getRandomNumeroMagico() {
    numeroMagico = Math.floor(Math.random()* (50 - 1) + 1);
    
   
    console.log(numeroMagico);
    return numeroMagico;
}

 function adivinar(e){
   e.preventDefault();
   
   let num_usuario = document.getElementById('numero_usuario');
   console.log(num_usuario.value);
   
   if(parseInt(numero_usuario.value)  === numeroMagico ){
    numMagicoh2.innerHTML = `"${numeroMagico}"`;
    numMagicoh2.className = "text-center";
    alert("Usted adivinó. Felicidades!!!")
   }else {
    numMagicoh2.innerHTML = `"${numeroMagico}"`;
    numMagicoh2.className = "text-center";
    alert("Usted perdió, Lo sentimos")
   }
   

 }