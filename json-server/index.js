const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./json-server/db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');
const path = require('path');

server.use(middlewares);

server.get('/echo', (req, res) => {
    res.jsonp(req.query);
});

server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//     if (req.method === 'POST') {
//         req.body.createdAt = Date.now();
//     }
//     next();
// });

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), "UTF-8"));
    const { users = [] } = db;
    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    )

    if ( userFromBd ) {
        return res.json(userFromBd)
    }
    return res.status(403).json({message: 'AUTH ERROR'})
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);
server.listen(3005, () => {
    console.log('JSON Server is running on port 3005');
});
