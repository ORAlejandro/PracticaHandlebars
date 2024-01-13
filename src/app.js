const express = require("express");
const app = express();
const PUERTO = 8080;
const viewsRouter = require("./routes/views.router.js");

//Importar handlebars
const exphbs = require("express-handlebars");

//Configuracion de motor de plantilla:
//Hacemos saber a express que cuando se ubique un archivo con la extension handlebars utilice el motor de plantilla "handlebars"
app.engine("handlebars", exphbs.engine());
//Indicamos que la vista de nuestra app es desarrollada con handlebars
app.set("view engine", "handlebars");
//Indicamos donde tiene que ir a buscar los archivos
app.set("views", "./src/views");
//Esta cfg esta en la documentacion de handlebars en la web de npm
//https://www.npmjs.com/package/handlebars

app.use(express.static("./src/public"));
app.use("/", viewsRouter);

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto http://localhost:${PUERTO}`);
})
