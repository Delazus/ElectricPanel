function showInfo(index) {
  const tooltip = document.getElementById("tooltip");
  const text = document.getElementById("tooltip-text");

  if (index === 1) {
    text.textContent = "Este es el taco principal. Usado para cortar todo el suministro.";
  } else if (index === 2) {
    text.textContent = "Este controla la línea de cocina. Úsalo si hay sobrecarga.";
  }

  tooltip.classList.remove("hidden");
}

function hideTooltip() {
  document.getElementById("tooltip").classList.add("hidden");
}
