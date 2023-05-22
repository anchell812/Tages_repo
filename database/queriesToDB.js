const baseRequests = require('./baseDBrequests');
const SQLqueries = require('./SQLqueries');
const logger = require('../logger/logger');
const SQLqueries = require('./SQLqueries');

class QueriesToDB {

    async gettingListOfFeedbacks(date) {
        const result = await baseRequests.connectionQuery(SQLqueries.getAllFeebacks(date));
        logger.info('Getting list of feedbacks');
        return result;
    }

}

module.exports = new QueriesToDB();