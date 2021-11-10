const app = require('../server');

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.listen(SERVER_PORT, () => {
    console.log(`서버 ${SERVER_PORT} 에서 가동`)
})