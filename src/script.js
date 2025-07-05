const rootPath = location.pathname.includes("pages") ? "../" : "./";

function carregarComponente(id, arquivo) {
  fetch(arquivo)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  carregarComponente("header", rootPath + "components/header.html");
  carregarComponente("footer", rootPath + "../components/footer.html");
});
