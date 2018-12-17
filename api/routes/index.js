var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var pool = mysql.createPool({
        port: "3306",
        user: "root",
        password: "root",
        database: "gxq",
        connectionLimit: 100
    })
    /* GET home page. */
router.get('/api/get/train_tickets', function(req, res, next) {
    var date = req.query.date.replace(/\s/g, "")
    pool.getConnection(function(err, con) {
        con.query("select * from tes where date=?", [date], function(err, rs) {
            res.json({ code: 1, data: rs })
        })
    })

});

module.exports = router;