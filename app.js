const http = require('http');
const port = process.ENV.port || 3000;
const server = http.createServer ((req, res) => {
    res.end ("Done from CI/CD demo")
});
server.listen(port, () => console.log("Running on ", port));