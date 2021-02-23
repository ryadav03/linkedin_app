const express = require("express")
const app = express()
const cors = require("cors")
const upload = require("express-fileupload");
const get_routes = require("./routes/get_routes")
const post_routes = require("./routes/post_routes")
const {lk_employee_data2,report_,states} = require("./database/models")

app.set("view-engine" , "ejs")
app.use(express.urlencoded({extended : false}))
app.use(upload())
app.use(express.static("./css_styling"))

app.use(post_routes)
app.use(get_routes)

const port = process.env.PORT || 4000;

app.listen(port , () => {
    lk_employee_data2.sequelize.sync()
    report_.sequelize.sync()
    states.sync()
    console.log("Server Running on Port 4000")
})