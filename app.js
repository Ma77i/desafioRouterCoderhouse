const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000


const productRouter = require("./routes/productos")
const homeRouter = require('./routes/home')
const addProdRouter = require('./routes/addProd'); 


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))



//INDEX HANDLERBARS
/* const { engine } = require('express-handlebars')
app.engine("handlebars", engine({
    layoutDir: path.join(__dirname, 'views/layout')
}))
app.get("/", (req, res) => res.render("productos", { layout: "index", products})) */


//PUG
const pugEngine = require('./engines/pug')
pugEngine(app)
const pugRouter = require('./routes/pug')
const pugAddRouter = require('./routes/pugAdd')
const pugProdRouter = require('./routes/pugProd')
const pugResultRouter = require('./routes/pugResult')

app.use("/pug", pugRouter)
app.use("/add", pugAddRouter)
app.use("/prod", pugProdRouter)
app.use("/result", pugResultRouter)


//EJS
const ejsEngine = require('./engines/ejs')
ejsEngine(app)
const ejsRouter = require('./routes/ejs')
const ejsAddRouter = require('./routes/ejsAdd')
const ejsProdRouter = require('./routes/ejsProd')

app.use("/ejs", ejsRouter)
app.use("/add", ejsAddRouter)
app.use("/prod", ejsProdRouter)


//INDEX NORMAL
app.use("/", homeRouter)
app.use("/api/productos", productRouter)
app.use("/addProducts", addProdRouter)


const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
server.on('err', (err) => {
    console.log(`Error: ${err}`);
})