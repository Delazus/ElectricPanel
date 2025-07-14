function showInfo(index) {
  const tooltip = document.getElementById("tooltip");
  const title = document.getElementById("tooltip-title");
  const content = document.getElementById("tooltip-content");
  const icon = document.getElementById("tooltip-icon");

  switch (index) {
    case 1:
      // ⚡ Información de advertencia
      title.textContent = "Toma Principal";
      content.textContent = "Este es el taco principal del panel. Corta todo el suministro eléctrico. Manipúlalo solo en caso de emergencia.";
      icon.textContent = "⚠️";
      tooltip.style.background = "#fff9e6"; // amarillo claro
      break;

    case 2:
      // 🔧 Información técnica
      title.textContent = "Breaker Cocina";
      content.textContent = "Este breaker controla los electrodomésticos de la cocina. Úsalo si detectas un cortocircuito o sobrecarga.";
      icon.textContent = "🔧";
      tooltip.style.background = "#e6f4ff"; // azul técnico
      break;

    // Puedes añadir más casos aquí
  }

  tooltip.classList.add("visible");
}

function hideTooltip() {
  document.getElementById("tooltip").classList.remove("visible");
}
