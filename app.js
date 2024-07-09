const encriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  
  function encriptarTexto() {
    let texto = document.getElementById("textoInput").value.toLowerCase();
    let resultado = "";
  
    if (detectarEncriptado(texto)) {
      alert("El texto ya está encriptado según las reglas.");
      return;
    }
  
    for (let char of texto) {
      if (encriptacion[char]) {
        resultado += encriptacion[char];
      } else {
        resultado += char;
      }
    }
  
    document.getElementById("textoResultado").value = resultado;
  }
  
  function desencriptarTexto() {
    let texto = document.getElementById("textoInput").value.toLowerCase();
    let resultado = "";
  
    if (!detectarEncriptado(texto)) {
      alert("El texto no está encriptado según las reglas.");
      return;
    }
  
    // Reemplazar cada valor de encriptación por su correspondiente letra
    resultado = texto.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
  
    document.getElementById("textoResultado").value = resultado;
  }
  
  function detectarEncriptado(texto) {
    // Comprobar si el texto contiene alguna de las palabras de encriptación
    return Object.values(encriptacion).some(encriptado => texto.includes(encriptado));
  }
  
  function copiarResultado() {
    let resultado = document.getElementById("textoResultado");
  
    // Crear un elemento de texto temporal
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = resultado.value;
    document.body.appendChild(tempTextArea);
  
    // Seleccionar y copiar el contenido del textarea temporal
    tempTextArea.select();
    document.execCommand("copy");
  
    // Eliminar el textarea temporal
    document.body.removeChild(tempTextArea);
  
    // Mostrar alerta de éxito
    alert("¡Texto copiado!");
  }
  