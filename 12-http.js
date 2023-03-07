const http = require('http')

const server = http.createServer((req , res) => {
    if(req.url === '/'){
       res.end('Welcome to tHE Website')

       return
    }
    if(req.url === '/about'){
       res.end('Short HistorY')
       return
    }
    res.end(`
    <h1>OOpss!!</h1>
    <p>Cant find the webpage<p>
    <a herf="/">Home page</a>
    `)
})
 server.listen(5000)