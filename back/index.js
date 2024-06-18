require("dotenv").config()
const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon()
    .then(
        res => {
            app.listen(process.env.PORT, () => {
                console.log("Server is running");
            })
        })
    .catch(
        err => {
            console.log("Error al conectar la BDD");
        }
    )

