const express = require("express");
const router = express.Router();

const arrayProductos = [
    { nombre: "Fideos", descripcion: "Durapas", precio: 200 },
    { nombre: "Arroz", descripcion: "Blandengue", precio: 300 },
    { nombre: "Cemento", descripcion: "Por que no?", precio: 500 },
    { nombre: "Helado", descripcion: "Mas frio que el corazon de ella", precio: 1500 }
];

router.get("/", (req, res) => {
    const usuario = {
        nombre: "Ale",
        apellido: "Ortega",
        mayorEdad: true
    }
    res.render("index", { usuario, arrayProductos, titulo: "Index" });
})

router.get("/contacto", (req, res) => {
    res.render("contacto", {titulo: "Contacto"});
})

module.exports = router;