class mysql {
    constructor() {
        var mysql = require('mysql');
        this.pool = mysql.createPool({
            connectionLimit: 100,
            host: '58.229.184.156',
            user: 'swg',
            password: 's05w04g',
            database: 'SWG',
            dateStrings: 'date'
        });
    }

    query(query, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(query, (error, res, fields) => {
                connection.release();
                if (error) throw error;
                callback(res, fields, error);
            })
        })
    }



}

module.exports = new mysql();