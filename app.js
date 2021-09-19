require("colors");

const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tarea = require("./helpers/models/tarea");
const Tareas = require("./helpers/models/tareas");

console.clear();

const main = async () => {
  let opt = "";

  do {
    // opt = await inquirerMenu();
    // console.log(opt);

    const tareas = new Tareas();
    const tarea = new Tarea('Comprar Comida');

    tareas._listado[tarea.id] = tarea

    console.log(tareas);

    await pausa();
  } while (opt !== "0");

  // pause();
};

main();
