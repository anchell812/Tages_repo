const mysql = require('mysql');
const { makeDb } = require('mysql-async-simple');
const config = require('./configDB.json');
const logger = require('../logger/logger');


class BaseRequests {

    connection = mysql.createConnection(config.connectData);
    db = makeDb();

    async connectToDB() {
        await this.db.connect(this.connection);
        logger.info('Database ---- ok');
    }

    async connectionQuery(request) {
        return this.db.query(this.connection, request);
    }

    async closeConnection() {
        await this.db.close(this.connection);
        logger.info('Database ---- close');
    }
}

module.exports = new BaseRequests();