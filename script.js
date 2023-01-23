function encriptar(){
    var textOrigen = document.getElementById("textoOrigen").value.toLowerCase();

    var textoFinal = textOrigen.replace(/e/img, "enter");
    var textoFinal = textoFinal.replace(/o/img, "eober");
    var textoFinal = textoFinal.replace(/i/img, "imes");
    var textoFinal = textoFinal.replace(/a/img, "ai");
    var textoFinal = textoFinal.replace(/u/img, "ufat");

    document.getElementById("textoFinal").innerHTML = origen;

}