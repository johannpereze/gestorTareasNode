const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArr(tareas = []) {
    // console.log(tareas);
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((tarea, index) => {
      let element;
      const i = `${index + 1}`.green;
      tarea.completadoEn
        ? (element = `${i}. ${tarea.desc} :: ${"Completada".green}`)
        : (element = `${i}. ${tarea.desc} :: ${"Pendiente".red}`);
      console.log(element);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    console.log();

    let idx = 1;

    this.listadoArr.forEach((tarea) => {
      if (Boolean(tarea.completadoEn) === completadas) {
        const i = `${(idx)}`.green;
        console.log(`${i}. ${tarea.desc}`);
        idx++;
      }
    });
  }
}

module.exports = { Tareas };
