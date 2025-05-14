// Lista de Palabras
var paises = [
  //A
  'Abogado', 'Aceite', 'África', 'Agente', 'Agua', 'Águila', 'Aguja', 'Agujero', 'Aire', 'Alemania', 'Algodón', 'Alianza',
  'Ambulancia', 'América', 'Ángel', 'Anillo', 'Antártida', 'Antorcha', 'Araña', 'Archivo', 'Arco', 'Argentina', 'Artículo', 
  'As', 'Atlántida', 'Azteca', 
  //B
  'Baile', 'Bala', 'Ballena', 'Banana', 'Banco', 'Banda', 'Baño', 'Barco', 'Barra', 'Batería', 'Berlín', 'Bermudas', 'Bicho',
  'Blanco', 'Bloque', 'Boca', 'Bola', 'Bolsa', 'Bomba', 'Bosque', 'Bota', 'Botella', 'Botón', 'Brazo', 'Bruja', 
  //C
  'Caballero', 'Caballo', 'Cabeza', 'Cabina', 'Cabo', 'Cactus', 'Cadena', 'Caja', 'Cama', 'Cámara', 'Cambio', 'Campana',
  'Campo', 'Canal', 'Canguro', 'Canto', 'Caña', 'Capa', 'Capital', 'Caqui', 'Cara', 'Caravana', 'Carga', 'Carrera', 'Carro',
  'Carta', 'Casco', 'Casino', 'Caza', 'Cementerio', 'Centauro', 'Centro', 'Cervantes', 'Checo', 'Chocolate', 'Choque', 'Chuleta',
  'Científico', 'Cinta', 'Cinturón', 'Círculo', 'Clase', 'Coche', 'Cocinero', 'Coco', 'Código', 'Cola', 'Cólera','Colombia', 'Columna', 
  'Cometa', 'Compás', 'Concierto', 'Conejo', 'Contrabandista', 'Copa', 'Corazón', 'Corneta', 'Corona', 'Corredor', 'Corriente',
  'Corte', 'Cresta', 'Cromo', 'Cruz', 'Cuadro', 'Cuarto', 'Cubierta', 'Cubo', 'Cuchillo', 'Cuello', 'Cuerda', 'Cuerno', 'Cura',
  //D
  'Dama', 'Delta', 'Destino', 'Día', 'Diamante', 'Diana', 'Diario', 'Diente', 'Dinosaurio', 'Disco', 'Don', 'Dragón','Duende',
  //E
  'Egipto', 'Embajada', 'Emperador', 'Enano', 'Enfermedad', 'Enfermera', 'Enlace', 'Escorpión', 'Espacio', 'Espía', 'Estación', 
  'Estadio', 'Estado', 'Estrella', 'Estudio', 'Etiqueta', 'Europa', 'Extraterrestre', 
  //F
  'Falda', 'Fantasma', 'Faro', 'Ficha', 'Fiesta', 'Figura', 'Flauta', 'Flecha', 'Foso', 'Francia', 'Frente', 'Fuego', 'Fuente', 
  'Fuerza', 'Furgoneta',
  //G
  'Gancho', 'Gato', 'Genio', 'Gigante', 'Golfo', 'Golondrina', 'Golpe', 'Goma', 'Góndola', 'Gota', 'Grado', 'Granada', 'Grano',
  'Grecia', 'Grifo', 'Guante', 'Guardia', 'Guerra', 'Gusano',
  //H
  'Helado', 'Helicóptero', 'Hielo', 'Hierba', 'Hoja', 'Hollywood', 'Horca', 'Hospital', 'Hotel',
  //I
  'Iglesia', 'Imán', 'India', 'Índice', 'Inglaterra', 'Italia', 'Jarra', 'Judía', 'Juicio',
  //K
  'Kiwi',
  //L
  'Ladrón', 'Lago Ness', 'Láser', 'Látigo', 'Lengua', 'León', 'Libra', 'Lima', 'Limusina', 'Línea', 'Lista', 'Llama', 'Llave',
  'Lomo', 'Londres', 'Luna', 'Luz',
  //M
  'Maestro', 'Magia', 'Malta', 'Mancha', 'Mando', 'Manga', 'Mango', 'Mano', 'Manzana', 'Mañana', 'Marca', 'Marfil',
  'Masa', 'Máscara', 'Mazo', 'Médico', 'Mercurio', 'Mesa', 'Metro', 'México', 'Micro', 'Miel', 'Millonario', 'Mina', 'Misil',
  'Modelo', 'Módulo', 'Monitor', 'Mono', 'Mortero','Moscú', 'Motor', 'Muelle', 'Muerte', 'Muñeca', 'Murciélago', 'Muro',
  //N
  'Naranja', 'Nave', 'Nieve', 'Nilo', 'Ninja', 'Noche', 'Nudo', 'Nueva York', 'Negro',
  //O
  'Obra', 'Ojo', 'Ola', 'Olimpo', 'Ópera', 'Orden', 'Órgano', 'Ornitorrinco', 'Oro', 'Oso',
  //P
  'Playstation', 'Pala', 'Palma', 'Pantalla', 'Papel', 'Paracaídas', 'Pase', 'Paso', 'Pasta', 'Pastel', 'Pavo', 'Pekín', 'Película', 'Pelotón', 'Pendiente',
  'Perro', 'Pez', 'Pico', 'Pie', 'Pieza', 'Pila', 'Piloto', 'Pingüino', 'Pinta', 'Piña', 'Pirámide', 'Pirata', 'Pista', 'Pistola', 'Placa', 'Plano', 'Planta',
  'Playa', 'Plomo', 'Pluma', 'Policía', 'Polo', 'Portada', 'Portero', 'Potro', 'Prensa', 'Prima', 'Princesa', 'Puente', 'Puerto', 'Pulpo', 'Pulso', 'Punta',
  //Q
  'Quiniela',
  //R
  'Radio', 'Rascacielo', 'Ratón', 'Rayo', 'Red', 'Regla', 'Reina', 'Reserva', 'Revolución', 'Rey', 'Robot', 'Rojo', 'Roma', 'Ronda', 'Rosa', 'Ruleta', 
  //S
  'Sable', 'Sáhara', 'Salsa','Satélite', 'Saturno', 'Señal', 'Serie', 'Serpiente', 'Sierra', 'Silla', 'Sirena', 'Sobre', 'Soldado', 'Submarinista', 'Suerte',
  'Superhéroe',
  //T
  'Tabla', 'Taco', 'Tacto', 'Talón', 'Tanque', 'Tapa', 'Tarde', 'Teclado', 'Teatro', 'Telescopio', 'Testigo', 'Tiempo', 'Tienda', 'Tierra', 'Tokio', 'Topo',
  'Torre', 'Trama', 'Tronco', 'Tubería', 'Tubo',
  //U
  'Unicornio',
  //V
  'Vacío', 'Vampiro', 'Vela', 'Veneno', 'Venus', 'Vestido', 'Vida', 'Vidrio', 'Viento', 
  //W

  //X

  //Y
  'Yema',
  //Z
  'Zanahoria', 'Zapato'

];

//-----------------------------------------------------------------------
// Página 1

function resetearPalabras() {
  var paisesDisponibles = paises.slice(); // Hacemos una copia de la lista original

  // Volver a recorrer cada div con clase 'pais' y reasignar una palabra aleatoria
  var divsPais = document.querySelectorAll(".pais");
  divsPais.forEach(function(divPais) {
    var paisAleatorio = obtenerItemAleatorio(paisesDisponibles);
    divPais.textContent = paisAleatorio;
  });

  // También actualizamos las palabras de la página 4
  copiarPalabra();
}

function palabrasOk() {
  const pagina1 = document.querySelector(".pagina_1");
  const pagina2 = document.querySelector(".pagina_2");

  pagina1.style.display = "none";
  pagina2.style.display = "flex";

  sincronizarPalabras(); 
}

function ir_instrucciones() {
  window.location.href = "./instrucciones.html";
}



//-----------------------------------------------------------------------
// Página 2

var equipoSeleccionado = "";
var turnoActual = "";
var turnosRestantes = 0;
var juegoFinalizado = false;
var modoAsesino = false;
var coloresCuadraditos = {};
var vinculaciones = {};
var equipoGanador = null;
var palabrasRestantes = {
  rojo: 9,
  azul: 8
};

function empiezaRojo() {
  if (juegoFinalizado) return;
  equipoSeleccionado = "rojo";
  turnoActual = "rojo";
  turnosRestantes = 9;
  palabrasRestantes = { rojo: 9, azul: 8 };
  document.getElementById("faltanRojos").innerText = "Faltan: 9";
  document.getElementById("faltanAzules").innerText = "Faltan: 8";
  document.getElementById("ColoreaCuadraditos").innerHTML = 'Asigna a los Agentes <b style="color: red;">ROJOS</b>.';
  habilitarPintado("red");
  cambiarPagina3();
}

function empiezaAzul() {
  if (juegoFinalizado) return;
  equipoSeleccionado = "azul";
  turnoActual = "azul";
  turnosRestantes = 9;
  palabrasRestantes = { rojo: 8, azul: 9 };
  document.getElementById("faltanRojos").innerText = "Faltan: 8";
  document.getElementById("faltanAzules").innerText = "Faltan: 9";
  document.getElementById("ColoreaCuadraditos").innerHTML = 'Asigna a los Agentes <b style="color: blue;">AZULES</b>.';
  habilitarPintado("blue");
  cambiarPagina3();
}

function habilitarPintado(color) {
  var cuadrados = document.querySelectorAll(".cuadradito");
  cuadrados.forEach(function (cuadradito) {
    if (!cuadradito.style.backgroundColor) {
      cuadradito.style.pointerEvents = "auto";
      cuadradito.onclick = function () {
        if (modoAsesino) {
          asignarAsesino(cuadradito);
        } else {
          pintarCuadradito(cuadradito, color);
        }
      };
    }
  });
}

function resetear() {
  document.querySelectorAll(".cuadradito").forEach(cuadradito => {
    cuadradito.style.backgroundColor = "";
    cuadradito.style.pointerEvents = "auto";
  });
  coloresCuadraditos = {};
  juegoFinalizado = false;
  modoAsesino = false;
  equipoGanador = null;
  turnoActual = equipoSeleccionado;
  turnosRestantes = 9;
  palabrasRestantes = equipoSeleccionado === "rojo" ? { rojo: 9, azul: 8 } : { rojo: 8, azul: 9 };
  document.getElementById("faltanRojos").innerText = "Faltan: " + palabrasRestantes.rojo;
  document.getElementById("faltanAzules").innerText = "Faltan: " + palabrasRestantes.azul;
  document.getElementById("ColoreaCuadraditos").innerHTML = turnoActual === "rojo" 
    ? 'Asigna a los Agentes <b style="color: red;">ROJOS</b>.' 
    : 'Asigna a los Agentes <b style="color: blue;">AZULES</b>.';
  habilitarPintado(turnoActual === "rojo" ? "red" : "blue");
  bloquearBotonComenzar();
}

function bloquearBotonComenzar() {
  var boton = document.getElementById("btn_comenzarAJugar");
  boton.classList.remove("boton_habilitado");
  boton.classList.add("boton_bloqueado");
}

function pintarCuadradito(cuadradito, color) {
  if (juegoFinalizado || turnosRestantes <= 0) return;

  cuadradito.style.backgroundColor = color;
  cuadradito.style.pointerEvents = "none";
  coloresCuadraditos[cuadradito.id] = color;

  turnosRestantes--;

  if (turnosRestantes === 0) {
    if (turnoActual === equipoSeleccionado) {
      turnoActual = (equipoSeleccionado === "rojo") ? "azul" : "rojo";
      turnosRestantes = 8;
      document.getElementById("ColoreaCuadraditos").innerHTML = 'Ahora asigna a los agentes ' + 
        (turnoActual === "rojo" 
          ? '<b style="color: red;">ROJOS</b>.' 
          : '<b style="color: blue;">AZULES</b>.');
      document.getElementById("musicaSiguiente").play();
      habilitarPintado(turnoActual === "rojo" ? "red" : "blue");
    } else {
      modoAsesino = true;
      document.getElementById("ColoreaCuadraditos").innerText = "Por último. Asigna al asesino NEGRO.";
      document.getElementById("musicaSiguiente").play();
      habilitarPintado("black");
    }
  }
}

function asignarAsesino(cuadradito) {
  if (juegoFinalizado || !modoAsesino) return;

  cuadradito.style.backgroundColor = "black";
  cuadradito.style.pointerEvents = "none";
  coloresCuadraditos[cuadradito.id] = "black";
  modoAsesino = false;
  juegoFinalizado = true;

  deshabilitarTodosLosCuadraditos();
  mensaje1();
}

function deshabilitarTodosLosCuadraditos() {
  var cuadrados = document.querySelectorAll(".cuadradito");
  cuadrados.forEach(function (cuadradito) {
    cuadradito.style.pointerEvents = "none";
  });
}

function mensaje1() {
  var cuadrados = document.querySelectorAll(".cuadradito");
  cuadrados.forEach(function (cuadradito) {
    if (!cuadradito.style.backgroundColor) {
      cuadradito.style.backgroundColor = "yellow";
      coloresCuadraditos[cuadradito.id] = "yellow";
    }
  });

  setTimeout(function () {
    document.getElementById("ColoreaCuadraditos").innerText = "Tablero preparado para Jugar";
    activarBoton();
    mostrarColores();
  }, 1000);
}

function activarBoton() {
  var boton = document.getElementById("btn_comenzarAJugar");
  boton.classList.remove("boton_bloqueado");
  boton.classList.add("boton_habilitado");
}

function mostrarColores() {
  let rojos = [], azules = [], negros = [], amarillos = [];

  for (var id in coloresCuadraditos) {
    let color = coloresCuadraditos[id];
    if (color === "red") rojos.push(id);
    else if (color === "blue") azules.push(id);
    else if (color === "black") negros.push(id);
    else if (color === "yellow") amarillos.push(id);
  }

  console.log("Cuadraditos rojos: ", rojos.join(", "));
  console.log("Cuadraditos azules: ", azules.join(", "));
  console.log("Cuadraditos negros: ", negros.join(", "));
  console.log("Cuadraditos amarillos: ", amarillos.join(", "));
}

asignarPaisesAleatorios();

function asignarPaisesAleatorios() {
  var paisesDisponibles = paises.slice();

  for (let i = 1; i <= 25; i++) {
    let divPais = document.getElementById('pais' + i);
    if (divPais) {
      let paisAleatorio = obtenerItemAleatorio(paisesDisponibles);
      divPais.textContent = paisAleatorio;
    }
  }

  copiarPalabra();
}

function copiarPalabra() {
  for (let i = 1; i <= 25; i++) {
    let palabraVisible = document.getElementById("palabra" + i);
    let palabraOculta = document.getElementById("pais" + i);
    if (palabraVisible && palabraOculta) {
      palabraVisible.textContent = palabraOculta.textContent;
    }
  }
}

function obtenerItemAleatorio(array) {
  var indice = Math.floor(Math.random() * array.length);
  return array.splice(indice, 1)[0];
}

function comenzarAJugar() {
  var confirmar = confirm("¿El tablero ya está terminado y desea comenzar el juego?");
  if (!confirmar) return;

  var cuadrados = document.querySelectorAll(".cuadradito");
  vinculaciones = {};
  var cantidadPalabras = 25;

  for (let i = 1; i <= cantidadPalabras; i++) {
    let divPais = document.getElementById("palabra" + i);
    divPais.classList.add("gris");

    let colorCuadradito = cuadrados[i - 1].style.backgroundColor;

    if (colorCuadradito === "red") {
      vinculaciones[divPais.id] = "rojo";
    } else if (colorCuadradito === "black") {
      vinculaciones[divPais.id] = "negro";
    } else if (colorCuadradito === "blue") {
      vinculaciones[divPais.id] = "azul";
    } else if (colorCuadradito === "yellow") {
      vinculaciones[divPais.id] = "amarillo";
    }

    divPais.onclick = function () {
      // Evita doble clic
      if (divPais.classList.contains("rojo") || divPais.classList.contains("azul") || divPais.classList.contains("negro") || divPais.classList.contains("amarillo")) return;

      divPais.classList.remove("rojo", "azul", "amarillo", "gris", "negro");
      divPais.classList.add(vinculaciones[divPais.id]);

      const color = vinculaciones[divPais.id];

      // Si ya hubo un ganador o perdedor, no ejecutar lógica adicional
      if (equipoGanador) return;

      if (color === "rojo" || color === "azul") {
        palabrasRestantes[color]--;
        actualizarContador(color);

        if (palabrasRestantes[color] === 0) {
          equipoGanador = color;
          document.getElementById("musicaPGanaste").play();
          mostrarBannerVictoria(color);
        }

      } else if (color === "negro") {
        equipoGanador = "negro";
        document.getElementById("musicaPerdiste").play();
        mostrarBannerNegro();
      }
    };
  }

  cambiarPagina4();
}

function actualizarContador(equipo) {
  if (equipo === "rojo") {
    document.getElementById("faltanRojos").innerText = "Faltan: " + palabrasRestantes.rojo;
  } else if (equipo === "azul") {
    document.getElementById("faltanAzules").innerText = "Faltan: " + palabrasRestantes.azul;
  }
}

function mostrarBannerVictoria(equipo) {
  if (equipoGanador !== equipo) return;

  const banner = document.getElementById("bannerVictoria");
  const imagen = document.getElementById("imagenVictoria");

  imagen.src = equipo === "rojo" ? "./imgs/bannerRojo.png" : "./imgs/bannerAzul.png";
  banner.style.display = "flex";

  setTimeout(() => {
    banner.style.display = "none";
  }, 5000);
}

function mostrarBannerNegro() {
  const banner = document.getElementById("bannerVictoria");
  const imagen = document.getElementById("imagenVictoria");

  imagen.src = "./imgs/bannerNegro.png";
  banner.style.display = "flex";

  setTimeout(() => {
    banner.style.display = "none";
  }, 3500);
}


//--------------------------------------------------------------------

function cambiarPagina3() {
  var pagina2 = document.querySelector('.pagina_2');
  var pagina3 = document.querySelector('.pagina_3');
  pagina2.style.display = "none";
  pagina3.style.display = "flex";
}

function cambiarPagina4() {
  var pagina3 = document.querySelector('.pagina_3');
  var pagina4 = document.querySelector('.pagina_4');
  pagina3.style.display = "none";
  pagina4.style.display = "flex";
}
