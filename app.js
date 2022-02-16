const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000




app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))



//INDEX HANDLERBARS
const { engine } = require('express-handlebars')
const viewEngine = require('./engines/hdb')
viewEngine(app)

app.engine("handlebars", engine({
    layoutDir: path.join(__dirname, 'views/hdb/layout')
}))

const hdbRouter = require('./routes/hdb')

app.use("/hdb", hdbRouter)
//app.get("/", (req, res) => res.render("productos", { layout: "index", products}))



const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
server.on('err', (err) => {
    console.log(`Error: ${err}`);
})