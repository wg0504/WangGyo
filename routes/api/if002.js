var mysql = require('../../public/javascripts/db');

exports.if002 = function (req, res) {
    let orderUid = req.params.id;
    let query1 = "SELECT * FROM ORDERS AS o LEFT OUTER JOIN PERFUME AS p ON o.PERFUME_UID=p.UID WHERE o.UID=" + orderUid + ";";
    mysql.query(query1, (rows1) => {
        console.log("done");
        let order = {
            orderNumber: orderUid,
            perfume: rows1[0].NAME,
            quantity: rows1[0].QUANTITY,
            date: rows1[0].ORDER_DATE,
            customer: {
                name: rows1[0].CUSTOMER,
                address: rows1[0].ADDRESS
            },
            payment: rows1[0].PAYMENT
        };
        let result = {
            status: 200,
            message: "success",
            result: order
        };
        res.send(result);
    });
};
