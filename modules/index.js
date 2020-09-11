const scrapController = require('./scrapData/controller/scrapController');

app.post('/',scrapController.fetchData)