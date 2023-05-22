const baseRequests = require('./baseDBrequests');
const queriesToDB = require('./queriesToDB');



(async function checkIfNewFeedbackAdded() {
    baseRequests.connection;
    await baseRequests.connectToDB();
    await queriesToDB.gettingListOfFeedbacks(date);
    await baseRequests.closeConnection();
})();