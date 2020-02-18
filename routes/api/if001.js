var mysql = require('../../public/javascripts/db');

exports.if001 = function (req, res) {
    var orderList = [];
    let query1 = "SELECT o.UID, o.CUSTOMER, p.NAME, o.ORDER_DATE FROM ORDERS AS o LEFT OUTER JOIN PERFUME AS p ON o.PERFUME_UID=p.UID;"
    mysql.query(query1, (rows1) => {
        console.log("done");
        for (let i = 0; i < rows1.length; i++) {
            let order = {
                orderNumber: rows1[i].UID,
                customerName: rows1[i].CUSTOMER,
                perfume: rows1[i].NAME,
                date: rows1[i].ORDER_DATE
            };
            orderList.push(order);
        }
        let result = {
            status: 200,
            message: "success",
            result: orderList
        };
        res.send(result);
    });
};
