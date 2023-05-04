const textArea = document.querySelector(".textImput");
const mensaje = document.querySelector(".textOutput");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function onEncrypt(){
    const textToEncrypt = encriptar(textArea.value);
    mensaje.value = textToEncrypt;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.style.border = "1px solid #0aec11";
}

function encriptar(stringToEncrypt){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringToEncrypt = stringToEncrypt.toLowerCase();

    for(i = 0; i < matriz.length; i++){
        if (stringToEncrypt.includes(matriz[i][0])){
            stringToEncrypt = stringToEncrypt.replaceAll(matriz[i][0], matriz[i][1])
        }
    }

    return stringToEncrypt;

    
}

function desencriptar(stringToDecrypt){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringToDecrypt = stringToDecrypt.toLowerCase();

    for(i = 0; i < matriz.length; i++){
        if (stringToDecrypt.includes(matriz[i][1])){
            stringToDecrypt = stringToDecrypt.replaceAll(matriz[i][1], matriz[i][0])
        }
    }

    return stringToDecrypt;

    
}

function onDecrypt(){
    const textToDecrypt = desencriptar(mensaje.value);
    textArea.value = textToDecrypt;
    mensaje.value = "";
    mensaje.style.backgroundImage = "url(assets/matrix.jpg)";
    mensaje.style.border = "none"; 

}

function copy(){
    let copyText = mensaje;
    copyText.select();
    document.execCommand("copy");
}

