require("colors");

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/models/guardarArchivo");
const { Tareas } = require("./helpers/models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArr(tareasDB);
    // console.log('log tarea',tarea);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
        case "3":
        tareas.listarPendientesCompletadas(true);
        break;
        case "4":
        tareas.listarPendientesCompletadas(false);
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
