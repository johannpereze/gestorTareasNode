require("colors");
const { mostrarMenu, pause } = require("./helpers/mensajes");

console.clear();

const main = async () => {
  let answer = "";

  do {
    answer = await mostrarMenu();
    console.log(answer);
    if (answer !== "0") await pause();
  } while (answer !== "0");

  // pause();
};

main();
