// DEPENDENCIES

const express = require('express');
const chalk = require('chalk');

// EXPRESS CONFIGURATION
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER

app.listen(PORT, () => {
    console.log(`App listening on PORT ${chalk.green(`${PORT}`)}`);
});
