function mostrarSolucao(id) {
  const solucao = document.getElementById(id);
  if (!solucao) return;

  if (solucao.style.display === "none" || solucao.style.display === "") {
    solucao.style.opacity = 0;
    solucao.style.display = "block";

    let opacity = 0;
    const fadeIn = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(fadeIn);
      } else {
        opacity += 0.1;
        solucao.style.opacity = opacity;
      }
    }, 40);
  } else {
    // Fade out
    let opacity = 1;
    const fadeOut = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(fadeOut);
        solucao.style.display = "none";
      } else {
        opacity -= 0.1;
        solucao.style.opacity = opacity;
      }
    }, 40);
  }
}
function toggleSolution(solutionId, button) {
  const solution = document.getElementById(solutionId);
  const isVisible = solution.style.display !== 'none';

  if (isVisible) {
    solution.style.display = 'none';
    button.innerHTML = '<i class="bi bi-lightbulb me-2"></i>Ver Solução';
    button.classList.remove('btn-secondary');
    button.classList.add('btn-primary-custom');
  } else {
    solution.style.display = 'block';
    button.innerHTML = '<i class="bi bi-eye-slash me-2"></i>Ocultar Solução';
    button.classList.remove('btn-primary-custom');
    button.classList.add('btn-secondary');
  }
}