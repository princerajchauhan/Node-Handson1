const http = require("http")
const jsonProducts = require('./jsonProducts')

const port  = 4000
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", 'text/html')
    if (req.url === '/') {
        res.write("<title>Node Handson1</title> <h1>What is node?</h1> <p> - Node js is a JavaScript runtime environment that executes on server.</p><p> - Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. </p><p> - Node.js allows developers to create both front-end and back-end applications using JavaScript. It was released in 2009 by Ryan Dahl.</p> <h2>Benefits of NodeJs</h2> <ol><li>High Performance</li><li>Scalability</li><li>Extensibility </li><li>Cost-Effective</li><li>Large Community Support </li><li>Easy to learn</li><li>Reduces Loading time using caching </li><li>Improves Response time and boosts performance</li></ol>")
    }
    else if (req.url === "/products") {
        const data = JSON.stringify(jsonProducts)
        res.write('<title>Handson1-products</title>')
        res.write(data)
    }
    else{
        res.write("<h2>Error 404 : NOT FOUND</h2>")
    }
    res.end()
    
})

server.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})
