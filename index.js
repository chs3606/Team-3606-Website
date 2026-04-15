let express = require('express')
let app = express()
const fs = require('fs')
const path = require('path')
let configFile = JSON.parse(fs.readFileSync(path.resolve("./jsons/config.json")))
let config = configFile[configFile.env]
let prohibitedRoutes = JSON.parse(fs.readFileSync(path.resolve("./jsons/prohibit.json")))

app.get(['/','/*fileRoute'], async (req, res) => {
    let fileRouteParam = req.params.fileRoute;
    let fileRoute = fileRouteParam?.pop() || "Home.html"
    
    try {
        res.sendFile(path.join(__dirname, "src", fileRoute))
    } catch {
        res.sendFile(path.join(__dirname, "src", "404.html"))
    }
})

app.listen(config.port, function() {
    const url = config.url.replaceAll("$PORT", config.port)
    console.log(`[Server]: Running on ${url}`)
})