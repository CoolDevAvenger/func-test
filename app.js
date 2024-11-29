const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const topLevelDomainController = require('./controllers/topLevelDomain');

app.get('/functions/countUniqueUrlsPerTopLevelDomain', topLevelDomainController.getTopLevelDomain);
app.post('/functions/countUniqueUrlsPerTopLevelDomain', topLevelDomainController.postTopLevelDomain);

app.listen(port, () => {
    console.log(`Server is running`);
})
