const celdas = []; //4x4
const RETICULA = 5;

const azulejos = [];
const NA = 37; //numero de azulejos
let opcionesI = [];


let ancho; //altura de celda
let alto; //anchura de celda

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
  {
    // tile 16
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,

  },
  {
    // tile 17
    UP: 0,
    RIGHT: 1,
    DOWN: 3,
    LEFT: 0,

  },
  {
    // tile 18
    UP: 0,
    RIGHT: 0,
    DOWN: 4,
    LEFT: 1,

  },
  {
    // tile 19
    UP: 3,
    RIGHT: 2,
    DOWN: 4,
    LEFT: 1,

  },
  {
    // tile 20
    UP: 3,
    RIGHT: 1,
    DOWN: 3,
    LEFT: 1,

  },
  {
    // tile 21
    UP: 3,
    RIGHT: 2,
    DOWN: 0,
    LEFT: 0,

  },
  {
    // tile 22
    UP: 4,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 2,

  },
  {
    // tile 23
    UP: 4,
    RIGHT: 1,
    DOWN: 3,
    LEFT: 2,

  },
  {
    // tile 24
    UP: 4,
    RIGHT: 2,
    DOWN: 4,
    LEFT: 2,
  },
  {
    // tile 25
    UP: 3,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 2,
  },
  {
    // tile 26
    UP: 0,
    RIGHT: 1,
    DOWN: 4,
    LEFT: 1,
  },
  {
    // tile 27
    UP: 4,
    RIGHT: 1,
    DOWN: 4,
    LEFT: 0,
  },
  {
    // tile 28
    UP: 3,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 2,
  },
  {
    // tile 29
    UP: 4,
    RIGHT: 2,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // tile 30
    UP: 3,
    RIGHT: 1,
    DOWN: 4,
    LEFT: 2,
  },
  {
    // tile 31
    UP: 3,
    RIGHT: 1,
    DOWN: 3,
    LEFT: 0,
  },
  {
    // tile 32
    UP: 0,
    RIGHT: 2,
    DOWN: 4,
    LEFT: 2,
  },
  {
    // tile 33
    UP: 0,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 2,
  },
  {
    // tile 34
    UP: 0,
    RIGHT: 1,
    DOWN: 3,
    LEFT: 1,
  },
  {
    // tile 35
    UP: 4,
    RIGHT: 2,
    DOWN: 4,
    LEFT: 0,
  },
  {
    // tile 36
    UP: 3,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 0,
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
  //background(255);

  const celdasConOpciones = celdas.filter((celda) => {
    return celda.opciones.length > 0;
  });

  const celdasDisponibles = celdasConOpciones.filter((celda) => {
    return celda.colapsada == false;
  });
  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length

    });
    print(celdasPorColapsar);

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];


    //print(celdaSeleccionada);

    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        // print(celdaActual);

        if (celdaActual.colapsada) {
          const azulejosIndice = celdaActual.opciones[0];
          const reglasActuales = reglas[azulejosIndice];

          // print('opciones de la celda actual' + celdaActual.opciones[0]);
          // print("indice: " + azulejosIndice);
          // print(reglasActuales);

          // print("azulejo " + azulejos[azulejosIndice])
          image(
            azulejos[azulejosIndice], x * ancho, y * alto, ancho, alto);


          //CAMBIAR ENTROPIA UP
          if (y > 0) {
            const indiceUP = x + (y - 1) * RETICULA;
            const celdaUP = celdas[indiceUP];
            if (!celdaUP.colapsada) {

              cambiarEntropia(celdaUP, reglasActuales['UP'], 'DOWN')
            }
          }

          // CAMBIAR ENTROPIA RIGHT
          if (x < RETICULA - 1) {
            const indiceRIGHT = (x + 1) + y * RETICULA;
            const celdaRIGHT = celdas[indiceRIGHT];
            if (!celdaRIGHT.colapsada) {
              cambiarEntropia(celdaRIGHT, reglasActuales['RIGHT'], 'LEFT')
            }
          }

          //CAMBIAR ENTROPIA DOWN
          if (y < RETICULA - 1) {
            const indiceDOWN = x + (y + 1) * RETICULA;
            const celdaDOWN = celdas[indiceDOWN];
            if (!celdaDOWN.colapsada) {
              cambiarEntropia(celdaDOWN, reglasActuales['DOWN'], 'UP')
            }
          }

          //CAMBIAR ENTROPIA LEFT
          if (x > 0) {
            const indiceLEFT = (x - 1) + y * RETICULA;
            const celdaLEFT = celdas[indiceLEFT];
            if (!celdaLEFT.colapsada) {
              cambiarEntropia(celdaLEFT, reglasActuales['LEFT'], 'RIGHT')
            }
          }
          //else
          //strokeWeight();
          // rect(x * ancho, y * alto, ancho, alto);
        }
      }
      // noLoop();
    }
  } else {
    background(0);
    let opcionesI = []
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
}

function cambiarEntropia(_celda, _regla, _opuesta) {
  const nuevasOpciones = [];
  for (let i = 0; i < _celda.opciones.length; i++) {
    if (
      _regla ==
      reglas[_celda.opciones[i]][_opuesta]
    ) {

      const celdaCompatible = _celda.opciones[i];
      nuevasOpciones.push(celdaCompatible);
    }
  }

  //if(_nuevasOpciones)
  _celda.opciones = nuevasOpciones;
  //print(nuevasOpciones);
}