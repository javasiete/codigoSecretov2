// Lista de Palabras
var paises = [
  //A
  'Abogado', 'Aceite', 'África', 'Agente', 'Agua', 'Águila', ' Aguja', 'Agujero', 'Aire', 'Alemania', 'Algodón', 'Alianza',
  'Ambulancia', 'América', 'Ángel', 'Anillo', 'Antártida', 'Antorcha', 'Araña', 'Archivo', 'Arco', 'Argentina', 'Artículo', 
  'As', 'Atlántida', 'Azteca', 
  //B
  'Baile', 'Bala', 'Ballena', 'Banana', 'Banco', 'Banda', 'Baño', 'Barco', 'Barra', 'Batería', 'Berlín', 'Bermudas', 'Bicho',
  'Blanco', 'Bloque', 'Boca', 'Bola', 'Bolsa', 'Bomba', 'Bosque', 'Bota', 'Botella', 'Botón', 'Brazo', 'Bruja', 
  //C
  'Caballero', 'Caballo', 'Cabreza', 'Cabina', 'Cabo', 'Cactus', 'Cadena', 'Caja', 'Cama', 'Cámara', 'Cambio', 'Campana',
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
  'Helado', 'Helicóptero', 'Hielo', 'Hierba', 'Hoja', 'Holywood', 'Horca', 'Hospital', 'Hotel',
  //I
  'Iglesia', 'Imán', 'India', 'Índice', 'Inglaterra', 'Italia', 'Jarra', 'Judía', 'Juicio',
  //K
  'Kiwi',
  //L
  'Ladrón', 'Lago Ness', 'Láser', 'Látigo', 'Lengua', 'León', 'Libra', 'Lima', 'Limusina', 'Línea', 'Lista', 'Llama', 'Llave',
  'Lomo', 'Londres', 'Luna', 'Luz',
  //M
  'Maestro', 'Magia', 'Malta', 'Mancha', 'Mando', 'Manga', 'Mango', 'Mano', 'Manzana', 'Mañana', 'Marca', 'Mancha', 'Marfil',
  'Masa', 'Máscara', 'Mazo', 'Médico', 'Mercurio', 'Mesa', 'Metro', 'México', 'Micro', 'Miel', 'Millonario', 'Mina', 'Misil',
  'Modelo', 'Módulo', 'Monitor', 'Mono', 'Mortero','Moscú', 'Motor', 'Muelle', 'Muerte', 'Muñeca', 'Murcielágo', 'Muro',
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
  'Radio', 'Rascacielo', 'Ratón', 'Rayo', 'Red', 'Regla', 'Reina', 'Reserva', 'Revolución', 'Rey', 'Robot', 'Rojo', 'Roma', 'Ronda', 'Rosa',' Ruleta', 
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
var equipoSeleccionado = "";
var turnoActual = "";
var turnosRestantes = 0;
var juegoFinalizado = false;
var modoAsesino = false;
var coloresCuadraditos = {};
var vinculaciones = {};

// Función para iniciar el equipo rojo
function empiezaRojo() {
  if (juegoFinalizado) return;
  equipoSeleccionado = "rojo";
  turnoActual = "rojo";
  turnosRestantes = 9;
  document.getElementById("ColoreaCuadraditos").innerHTML = 'Asigna a los Agentes <b style="color: red;">ROJOS</b>.';
  habilitarPintado("red");
  cambiarPagina2();
}

// Función para iniciar el equipo azul
function empiezaAzul() {
  if (juegoFinalizado) return;
  equipoSeleccionado = "azul";
  turnoActual = "azul";
  turnosRestantes = 9;
  document.getElementById("ColoreaCuadraditos").innerHTML = 'Asigna a los Agentes <b style="color: blue;">AZULES</b>.';
  habilitarPintado("blue");
  cambiarPagina2();
}

// Habilita el pintado solo para el equipo en turno o el asesino
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

// Función para resetear el juego
function resetear() {
  document.querySelectorAll(".cuadradito").forEach(cuadradito => {
    cuadradito.style.backgroundColor = "";
    cuadradito.style.pointerEvents = "auto";
  });
  coloresCuadraditos = {};
  juegoFinalizado = false;
  modoAsesino = false;
  turnoActual = equipoSeleccionado;
  turnosRestantes = 9;
  document.getElementById("ColoreaCuadraditos").innerHTML = turnoActual === "rojo" 
    ? 'Asigna a los Agentes <b style="color: red;">ROJOS</b>.' 
    : 'Asigna a los Agentes <b style="color: blue;">AZULES</b>.';
  habilitarPintado(turnoActual === "rojo" ? "red" : "blue");
  bloquearBotonComenzar();
}

// Función para bloquear el botón de comenzar el juego
function bloquearBotonComenzar() {
  var boton = document.getElementById("btn_comenzarAJugar");
  boton.classList.remove("boton_habilitado");
  boton.classList.add("boton_bloqueado");
}


// Función para pintar un cuadradito
function pintarCuadradito(cuadradito, color) {
  if (juegoFinalizado || turnosRestantes <= 0) return; // No permitir pintar si ya terminó

  cuadradito.style.backgroundColor = color;
  cuadradito.style.pointerEvents = "none"; // Desactivar clic en ese cuadradito
  
  // Almacenar el color del cuadradito en el objeto coloresCuadraditos
  coloresCuadraditos[cuadradito.id] = color;

  turnosRestantes--;

  // Si el equipo ha pintado todos sus cuadraditos
  if (turnosRestantes === 0) {
    if (turnoActual === equipoSeleccionado) {
      // Cambio de turno al segundo equipo
      turnoActual = (equipoSeleccionado === "rojo") ? "azul" : "rojo";
      turnosRestantes = 8; // Segundo equipo solo puede pintar 8
      document.getElementById("ColoreaCuadraditos").innerHTML = 'Ahora asigna a los agentes ' + 
  (turnoActual === "rojo" 
    ? '<b style="color: red;">ROJOS</b>.' 
    : '<b style="color: blue;">AZULES</b>.');
      habilitarPintado(turnoActual === "rojo" ? "red" : "blue");
    } else {
      // Si el segundo equipo ya terminó, activar el modo asesino
      modoAsesino = true;
      document.getElementById("ColoreaCuadraditos").innerText = "Por último. Asigna al asesino NEGRO.";
      habilitarPintado("black"); // Habilitar pintado en negro
    }
  }
}

// Función para asignar al Asesino
function asignarAsesino(cuadradito) {
  if (juegoFinalizado || !modoAsesino) return;

  cuadradito.style.backgroundColor = "black";
  cuadradito.style.pointerEvents = "none"; // Desactivar clic en ese cuadradito
  coloresCuadraditos[cuadradito.id] = "black"; // Almacenar el color negro
  modoAsesino = false; // Desactivar modo asesino
  juegoFinalizado = true; // Finalizar el juego

  deshabilitarTodosLosCuadraditos();
  mensaje1(); // Mostrar mensaje final
}

// Deshabilita todos los cuadraditos para que no se puedan pintar más
function deshabilitarTodosLosCuadraditos() {
  var cuadrados = document.querySelectorAll(".cuadradito");
  cuadrados.forEach(function (cuadradito) {
    cuadradito.style.pointerEvents = "none";
  });
}

// Muestra el mensaje final después de 1 segundo
function mensaje1() {
  // Colorea los cuadraditos restantes de amarillo
  var cuadrados = document.querySelectorAll(".cuadradito");
  cuadrados.forEach(function (cuadradito) {
    if (!cuadradito.style.backgroundColor) { // Solo si no tiene color asignado
      cuadradito.style.backgroundColor = "yellow";
      coloresCuadraditos[cuadradito.id] = "yellow"; // Almacenar como amarillo
    }
  });

  // Espera 1 segundo y muestra el mensaje final
  setTimeout(function () {
    document.getElementById("ColoreaCuadraditos").innerText = "Tablero preparado para Jugar";

    // Se habilita para apretar el boton "Comenzar el Juego":
    activarBoton();
    
    // Mostrar todos los cuadraditos en consola al final del juego
    mostrarColores();

  }, 1000);
}

function activarBoton() {
  var boton = document.getElementById("btn_comenzarAJugar");
  
  // Eliminar la clase de bloqueado, para luego añadir la clase habilitado:
  boton.classList.remove("boton_bloqueado");
  boton.classList.add("boton_habilitado");
}

// Función para mostrar los cuadraditos de cada color
function mostrarColores() {
  let rojos = [];
  let azules = [];
  let negros = [];
  let amarillos = [];
  
  // Recorremos el objeto coloresCuadraditos para clasificar los cuadraditos por su color
  for (var id in coloresCuadraditos) {
    let color = coloresCuadraditos[id];
    if (color === "red") {
      rojos.push(id); // Guardamos el id de los cuadraditos rojos
    } else if (color === "blue") {
      azules.push(id); // Guardamos el id de los cuadraditos azules
    } else if (color === "black") {
      negros.push(id); // Guardamos el id de los cuadraditos negros
    } else if (color === "yellow") {
      amarillos.push(id); // Guardamos el id de los cuadraditos amarillos
    }
  }

  // Mostrar los IDs de los cuadraditos en consola
  console.log("Cuadraditos rojos: ", rojos.join(", "));
  console.log("Cuadraditos azules: ", azules.join(", "));
  console.log("Cuadraditos negros: ", negros.join(", "));
  console.log("Cuadraditos amarillos: ", amarillos.join(", "));
}

//-----------------------------------------------------------------------

// Asignar países aleatorios a los divs
asignarPaisesAleatorios();

// Función para asignar palabras aleatorias a los divs
function asignarPaisesAleatorios() {
  var paisesDisponibles = paises.slice(); // Copia de la lista de países original
  
  // Recorrer cada PALABRA y asignar una palabra al AZAR
  for (var i = 1; i <= 399; i++) {
    var divPais = document.getElementById('pais' + i);
    var paisAleatorio = obtenerItemAleatorio(paisesDisponibles);
    divPais.textContent = paisAleatorio;
  }
}

// Función para obtener un ítem aleatorio y único de un array
function obtenerItemAleatorio(array) {
  var indice = Math.floor(Math.random() * array.length);
  return array.splice(indice, 1)[0];
}


// Función para vincular los cuadraditos a los países cuando el usuario hace clic en "Comenzar a Jugar"
function comenzarAJugar() {
  // Mostrar el mensaje de confirmación
  var confirmar = confirm("¿El tablero ya está terminado y desea comenzar el juego?");
  
  if (confirmar) {
    var cuadrados = document.querySelectorAll(".cuadradito");
  var paises = document.querySelectorAll(".pais");

  // Inicializamos los divs pais a gris y vinculamos los cuadraditos
  paises.forEach(function (divPais, index) {
    divPais.classList.add("gris"); // Inicialmente gris, asignando la clase correspondiente

    // Vinculamos el cuadradito con el país correspondiente
    var colorCuadradito = cuadrados[index].style.backgroundColor;

    // Asignamos las clases según el color del cuadradito
    if (colorCuadradito === "red") {
      vinculaciones[divPais.id] = "rojo"; // Almacenar la clase 'rojo'
    } else if (colorCuadradito === "black") {
      vinculaciones[divPais.id] = "negro"; // Almacenar la clase 'negro'
    } else if (colorCuadradito === "blue") {
      vinculaciones[divPais.id] = "azul"; // Almacenar la clase 'azul' (si se usara)
    } else if (colorCuadradito === "yellow") {
      vinculaciones[divPais.id] = "amarillo"; // Almacenar la clase 'amarillo' (si se usara)
    }

    // Hacer que al hacer clic en un país, cambie al color vinculado
    divPais.onclick = function() {
      // Asignamos la clase vinculada al país
      divPais.classList.remove("rojo", "azul", "amarillo", "gris", "negro"); // Eliminamos clases previas
      divPais.classList.add(vinculaciones[divPais.id]); // Añadimos la clase correspondiente
    };
  });

  // Activa la Pagina 3, cerrando la Pagina 2:
  cambiarPagina3()


  } else {
    // Si el usuario hace clic en "Cancelar", no se hace nada
    return;
  }
}

// -----------------------------------------------------------
function cambiarPagina2() {
  var pagina1 = document.querySelector('.pagina_1');
  var pagina2 = document.querySelector('.pagina_2');

  pagina1.style.display = "none";
  pagina2.style.display = "flex";
}

function cambiarPagina3() {
  var pagina2 = document.querySelector('.pagina_2');
  var pagina3 = document.querySelector('.pagina_3');

  pagina2.style.display = "none";
  pagina3.style.display = "flex";
}

