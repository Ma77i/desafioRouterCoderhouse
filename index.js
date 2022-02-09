const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const productRouter = require("./routes/productos")
const homeRouter = require('./routes/home')
const addProdRouter = require('./routes/addProd') 


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use("/api/productos", productRouter)
app.use("/", homeRouter)
app.use("/addProducts", addProdRouter)


const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
server.on('err', (err) => {
    console.log(`Error: ${err}`);
})