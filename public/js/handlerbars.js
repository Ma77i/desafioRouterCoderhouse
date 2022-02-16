console.log('desde handlerbars')

const Contenedor = require(path.join(__dirname, "./contenedor.js"));

const products = new Contenedor(path.join(__dirname, "../data.json"))
console.log(products)

const template = document.getElementById('template').innerHTML
const compile = handlerbars.compile(template)

const result = compile ({products})
document.getElementById('app').innerHTML += result
console.log(result)