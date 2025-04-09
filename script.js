let primeraCantidad = null;
let operacionActual = '';
const chat = document.getElementById("chatMessage");
const historyList = document.getElementById("historyList");

// Agrega número u operador al display y actualiza el chat infantil
function append(value) {
  const display = document.getElementById("display");
  display.value += value;

  if (!isNaN(value)) {
    if (!primeraCantidad) {
      primeraCantidad = value;
      chat.innerText = `🍎 Tienes ${primeraCantidad} manzanas`;
    } else if (operacionActual) {
      switch (operacionActual) {
        case '+':
          chat.innerText = `➕ ¡Bien! Agregarás ${value} manzanas`;
          break;
        case '-':
          chat.innerText = `➖ ¡Genial! Restarás ${value} manzanas`;
          break;
        case '*':
          chat.innerText = `✖️ Multiplicarás tus manzanas por ${value}`;
          break;
        case '/':
          chat.innerText = `➗ Repartirás tus manzanas en ${value} partes`;
          break;
      }
    }
  }

  if (['+', '-', '*', '/'].includes(value)) {
    operacionActual = value;
  }
}

// Calcula el resultado y muestra mensaje + historial
function calculate() {
  const display = document.getElementById("display");
  try {
    const operacion = display.value;
    const resultado = eval(operacion);
    display.value = resultado;

    const mensajeFinal = `🎉 ¡Bien! Tienes ${resultado} manzanas en total 🍎`;
    chat.innerText = mensajeFinal;

    // Agregar al historial
    const item = document.createElement("li");
    item.textContent = `${operacion} = ${resultado} 🍎`;
    historyList.appendChild(item);

    primeraCantidad = null;
    operacionActual = '';
  } catch (error) {
    chat.innerText = "⚠️ ¡Ups! Algo salió mal. Intenta de nuevo.";
  }
}

// Limpia display y reinicia mensaje
function clearDisplay() {
  document.getElementById("display").value = "";
  chat.innerText = "🍏 Elige cuántas manzanas tienes para empezar";
  primeraCantidad = null;
  operacionActual = "";
}

// Elimina último carácter
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Alternar tema claro/oscuro
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");

  const button = document.getElementById("themeToggle");
  button.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
