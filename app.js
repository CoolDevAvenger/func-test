const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const topLevelDomainController = require('./controllers/topLevelDomain');

app.get('/functions/topLevelDomain', topLevelDomainController.getTopLevelDomain);
app.post('/functions/topLevelDomain', topLevelDomainController.postTopLevelDomain);

app.listen(port, () => {
    console.log(`Server is running`);
})
