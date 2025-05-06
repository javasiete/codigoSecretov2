
// Página 1

function regresar_index() {
  window.location.href = "/index.html";
}

function ir_pagina_2() {
  const pagina1 = document.querySelector(".pagina_1");
  const pagina2 = document.querySelector(".pagina_2");

  pagina1.style.display = "none";
  pagina2.style.display = "flex";
}

//-----------------------------------------------------------------------
// Página 2

function volver_pagina_1() {
  const pagina1 = document.querySelector(".pagina_1");
  const pagina2 = document.querySelector(".pagina_2");

  pagina2.style.display = "none";
  pagina1.style.display = "flex";
}

function ir_pagina_3() {
  const pagina3 = document.querySelector(".pagina_3");
  const pagina2 = document.querySelector(".pagina_2");

  pagina2.style.display = "none";
  pagina3.style.display = "flex";
}

//-----------------------------------------------------------------------
// Página 3

function volver_pagina_2() {
  const pagina3 = document.querySelector(".pagina_3");
  const pagina2 = document.querySelector(".pagina_2");

  pagina3.style.display = "none";
  pagina2.style.display = "flex";
}

function ir_pagina_4() {
  const pagina3 = document.querySelector(".pagina_3");
  const pagina4 = document.querySelector(".pagina_4");

  pagina3.style.display = "none";
  pagina4.style.display = "flex";
}

//-----------------------------------------------------------------------
// Página 4

function volver_pagina_3() {
  const pagina3 = document.querySelector(".pagina_3");
  const pagina4 = document.querySelector(".pagina_4");

  pagina4.style.display = "none";
  pagina3.style.display = "flex";
}

function ir_pagina_5() {
  const pagina5 = document.querySelector(".pagina_5");
  const pagina4 = document.querySelector(".pagina_4");

  pagina4.style.display = "none";
  pagina5.style.display = "flex";
}

//-----------------------------------------------------------------------
// Página 5

function volver_pagina_4() {
  const pagina5 = document.querySelector(".pagina_5");
  const pagina4 = document.querySelector(".pagina_4");

  pagina5.style.display = "none";
  pagina4.style.display = "flex";
}

