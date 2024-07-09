const encriptacion = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

function procesar(tipo) {
  let texto = document.getElementById("textoInput").value;
  
  // Validación de solo letras minúsculas
  if (/[^a-zñ\s]/.test(texto)) {
    alert("Utilice solo letras minúsculas");
    return;
  }
  
  let resultado = "";

  if (tipo === 'encriptar') {
    if (!detectarEncriptado(texto)) {
      resultado = encriptarTexto(texto);
    } else {
      alert("Texto encriptado");
      return;
    }
  } else if (tipo === 'desencriptar') {
    if (detectarEncriptado(texto)) {
      resultado = desencriptarTexto(texto);
    } else {
      alert("El texto no está encriptado");
      return;
    }
  }

  document.getElementById("textoResultado").value = resultado;
}

function encriptarTexto(texto) {
  return texto.replace(/[eiou]/g, match => encriptacion[match]);
}

function desencriptarTexto(texto) {
  let resultado = texto;
  for (let key in encriptacion) {
    if (encriptacion.hasOwnProperty(key)) {
      resultado = resultado.replace(new RegExp(encriptacion[key], 'g'), key);
    }
  }
  return resultado;
}

function detectarEncriptado(texto) {
  return Object.values(encriptacion).some(encriptado => texto.includes(encriptado));
}

function copiarTexto() {
  const textoResultado = document.getElementById("textoResultado");
  textoResultado.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
  document.getElementById("botonCopiar").innerText = "copiar resultado";
}

function limpiarTexto() {
  document.getElementById("textoInput").value = "";
  document.getElementById("textoResultado").value = "";
}
