const fecha_libro = new Date(1992,0,25);
console.log(fecha_libro);

const fecha_nacimiento = new Date("april 10 1980");
console.log(fecha_nacimiento);

const Librofavorito = {
    titulo: "Los cinco lenguajes del amor",
    autor: "Gary Chapman",
    enlace: "https://www.panamericana.com.co/los-cinco-lenguajes-del-amor-594779/p",
    fecha_libro
    }
    
const Datosmios = {
    nombre: "Paola Adriana Erazo",
    edad: 43,
    isdeveloper: true,
    fecha_nacimiento,
    Librofavorito
}

console.log(Datosmios);