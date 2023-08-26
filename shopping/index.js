const express = require("express");
const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    res.status(200).json({ 'msg': 'Hello from Shopping Service' });
});

app.listen(8003, () => {
    console.log("Shopping Server is running on port 8003");
})
