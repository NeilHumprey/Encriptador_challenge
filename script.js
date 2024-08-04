
document.getElementById("textRight").readOnly = true;           // textArea de SALIDA de solo lectura

function asignarTextoElemento(id, texto) {
    let elemento = document.getElementById(id);
    elemento.innerHTML = texto;
}

function limpiarPlaceholder(texto) {
    
    const textarea = document.getElementById("containerBotones");
    textarea.placeholder = texto;

}

function textoEntradaUsuario() {
    let textoUsuario = document.getElementById("containerBotones").value.toLowerCase();
    textoEntrada = textoUsuario;
} 

function desactivarBotones() {
    document.getElementById("botonEncriptar").disabled = true;
    document.getElementById("botonDesencriptar").disabled = true;

    document.getElementById("containerBotones").disabled = true; //Deshabilita el textArea de entrada
}

function activarBotones() {
    document.getElementById("botonEncriptar").disabled = false;
    document.getElementById("botonDesencriptar").disabled = false;

        //Habilitar entrada de texto
    document.getElementById("containerBotones").disabled = false;
}

function ajustarRight() {
    //Right: quitar gif
    rightContent.classList.remove("right");
    rightContent.classList.add("right__ajustar"); 

    copiarID.classList.remove("ocultar");                               //Boton copiar: visible

    document.getElementById("textRight").style.height = "80%";          //Aumenta el height en 80%
    document.getElementById("rightContent").style.paddingTop = "0";     //Elimina el paddin-Top 
}

function restablecerRight() {

    rightContent.classList.remove("right__ajustar");
    rightContent.classList.add("right");

    document.getElementById("textRight").style.height = "63px";

    copiarID.classList.add("ocultar");
}

function encriptar() {
    textoEntrada = textoEntrada.replace(/e/img, "enter");
    textoEntrada = textoEntrada.replace(/i/img, "imes");
    textoEntrada = textoEntrada.replace(/a/img, "ai");
    textoEntrada = textoEntrada.replace(/o/img, "ober");
    textoEntrada = textoEntrada.replace(/u/img, "ufat");
    textoSalida = textoEntrada;
}

function desencriptar() {
    textoEntrada = textoEntrada.replace(/enter/img, "e");
    textoEntrada = textoEntrada.replace(/imes/img, "i");
    textoEntrada = textoEntrada.replace(/ai/img, "a");
    textoEntrada = textoEntrada.replace(/ober/img, "o");
    textoEntrada = textoEntrada.replace(/ufat/img, "u");
    textoSalida = textoEntrada;
}


function clickEncriptar() {

    textoEntradaUsuario();                                              //Texto del usuario

    if (!/^[a-z\s]+$/.test(textoEntrada)) {                             //Evalúa el texto introducido
        return;
    }

    if (textoEntrada != "") {
        
        document.getElementById("containerBotones").value = "";         //Borrar texto del usuario
        limpiarPlaceholder("Encriptando...");                           //texArea: cambiar texto de fondo
        containerBotones.classList.remove("ingreso__texto");            //Cambiar gif de textArea
        containerBotones.classList.add("bg__encriptar");                //Centrar texto
    
        desactivarBotones();                                            //deshabilita los botones 3.5 segundos
        encriptar();
    
        setTimeout( () => {                                             //Después de 3.5 segundos reasignar valores:
            containerBotones.classList.remove("bg__encriptar");
            containerBotones.classList.add("ingreso__texto");
            activarBotones();                                                          //Reactiva los botones
            limpiarPlaceholder("Ingrese el texto que desee encriptar o desencriptar"); //Cambiar texto placeholder
            ajustarRight();
            asignarTextoElemento("textRight", textoSalida);
        }, 3500);
    } else {

    }
}

function clickDesencriptar() {

    textoEntradaUsuario();

    if (!/^[a-z\s]+$/.test(textoEntrada)) {                             //Evalúa el texto introducido
        return;
    }

    if (textoEntrada != "") {

        document.getElementById("containerBotones").value = "";
        limpiarPlaceholder("Desencriptando...");
        containerBotones.classList.remove("ingreso__texto");
        containerBotones.classList.add("bg__desencriptar");
    
        desactivarBotones();
        desencriptar();
    
        setTimeout( () => {
            containerBotones.classList.remove("bg__desencriptar");
            containerBotones.classList.add("ingreso__texto");
            activarBotones();
            limpiarPlaceholder("Ingrese el texto que desee encriptar o desencriptar");
            ajustarRight();
            asignarTextoElemento("textRight", textoSalida);
        }, 2500);
    } else {

    }
}

function clickCopiar() {
    let textCopy = document.getElementById("textRight"); 
    textCopy.select();
    document.execCommand("copy");

    containerBotones.focus();

    restablecerRight();
    asignarTextoElemento("textRight", "")
}


