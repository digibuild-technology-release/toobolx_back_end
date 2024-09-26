const express = require('express');
const { readFileSync } = require("fs");
const router = express.Router();
const path = require("path");

router.get("/data", async (req, res) => {
    try {
        const data = readFileSync(path.resolve(__dirname,'../data/Data.json'));
        res.status(200).send(JSON.parse(data));

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Internal Server Error' });
    }
});
module.exports = router;