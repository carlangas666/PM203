
console.log("Hola mundo Js desde el servidor")
console.time("miProceso");

for (let i = 0; i < 10000; i++) {
}
console.timeEnd("miProceso");


let usuarios=[
    {nombre:"Carlos", edad: 21},
    {nombre:"Armando", edad: 24},
    {nombre:"Oscar", edad: 21}
];

console.table(usuarios);