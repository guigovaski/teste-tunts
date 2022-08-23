const http = require("http");
const { populateData } = require("./index.js");
require("dotenv").config()

const app = http.createServer();

app.on("request", (req, res) => {
    // GET: /
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(
            `
                <h1 style="text-align: center;">Welcome to Countries List</h1>
                <p style="text-align: center;">Access "/countries" endpoint for download a <b>Countries List</b> file</p>
            `
        );
    // GET: /countries
    } else if (req.method === "GET" && req.url === "/countries") {
        populateData(res);
    }
});

app.listen(process.env.PORT, () => console.log("Server is running"));
