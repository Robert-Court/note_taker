// DEPENDENCIES

const express = require('express');
const chalk = require('chalk');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// EXPRESS CONFIGURATION
const app = express();
// whatever is specified in the user environment or port 3000
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

// ROUTER

require(apiRoutes)(app);
require(htmlRoutes)(app);

// LISTENER

app.listen(PORT, () => {
    console.log(`App listening on PORT ${chalk.green(`${PORT}`)}`);
});
