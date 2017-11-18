// require dependencies
const express     =   require('express');
const bodyParser  =   require('body-parser');
const morgan      =   require('morgan');
const path        =   require('path');

// initialize application
const app         =   express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// select port and listen to app
const PORT = 3000;
app.listen(PORT, () => console.log('Server is listening on PORT: ', PORT));
