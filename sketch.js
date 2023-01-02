const celdas = []; //4x4
const RETICULA = 8;
let ancho; //altura de celda
let alto; //anchura de celda

const azulejos = [];
const NA = 16; //numero de azulejos

const reglas = [

  //reglas de los bordes de cada azulejo
  {
    // tile 0
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,

  },
  {
    // tile 1
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,

  },
  {
    // tile 2
    UP: 3,
    RIGHT: 0,
    DOWN: 3,
    LEFT: 0,

  },
  {
    // tile 3
    UP: 0,
    RIGHT: 2,
    DOWN: 0,
    LEFT: 0,

  },
  {
    // tile 4
    UP: 0,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 0,

  },
  {
    // tile 5
    UP: 0,
    RIGHT: 0,
    DOWN: 4,
    LEFT: 2,

  },
  {
    // tile 6
    UP: 0,
    RIGHT: 2,
    DOWN: 4,
    LEFT: 0,

  },
  {
    // tile 7
    UP: 0,
    RIGHT: 0,
    DOWN: 3,
    LEFT: 2,

  },
  {
    // tile 8
    UP: 3,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,

  },
  {
    // tile 9
    UP: 4,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,

  },
  {
    // tile 10
    UP: 4,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,

  },
  {
    // tile 11
    UP: 3,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,

  },
  {
    // tile 12
    UP: 4,
    RIGHT: 0,
    DOWN: 4,
    LEFT: 0,

  },
  {
    // tile 13
    UP: 0,
    RIGHT: 0,
    DOWN: 3,
    LEFT: 0,

  },
  {
    // tile 14
    UP: 4,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,

  },
  {
    // tile 15
    UP: 0,
    RIGHT: 2,
    DOWN: 0,
    LEFT: 2,

  },


];

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`azulejos/tile${i}.jpg`);
  }

}

function setup() {
  createCanvas(1080, 1080);

  ancho = width / RETICULA;
  alto = height / RETICULA;

  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    }
  }


}

function draw() {
  background(111);
  const celdasDisponibles = celdas.filter((celda) => {
    return celda.colapsada == false;
  });
  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return (
        celda.opciones.length == celdasDisponibles[0].opciones.length
      );
    });

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];


    print(celdaSeleccionada);


    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.colapsada) {
          image(azulejos[celdaActual.opciones[0]],
            x * ancho,
            y * alto, ancho, alto);
        }
      }
    }
    //noLoop();
  }
}
