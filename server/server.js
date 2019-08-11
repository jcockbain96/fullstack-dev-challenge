const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
const routes = require('./routes');

const app = express();

app.use(cors());

app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.json());

app.use(expressValidator());

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/api/v1/', routes);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

module.exports = app;
