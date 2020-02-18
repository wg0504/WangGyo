var mysql = require('../../public/javascripts/db');

exports.if003 = function (req, res) {
    var perfumeList = [];
    let query1 = "SELECT UID, NAME, PRICE, GROUP_CONCAT(INGREDIENTS SEPARATOR ',') AS INGREDIENTS FROM(SELECT p.UID, p.NAME, p.PRICE, i.NAME AS INGREDIENTS FROM PERFUME AS p LEFT OUTER JOIN INGREDIENT AS i ON p.UID = i.PERFUME_UID)P GROUP BY UID;";
    mysql.query(query1, (rows1) => {
        console.log("done");
        for (let i = 0; i < rows1.length; i++) {
            let perfume = {
                name: rows1[i].NAME,
                price: rows1[i].PRICE,
                ingredients: rows1[i].INGREDIENTS.split(',')
            }
            perfumeList.push(perfume);
        }
        let result = {
            status: 200,
            message: "success",
            result: perfumeList
        };
        res.send(result);
    });
};