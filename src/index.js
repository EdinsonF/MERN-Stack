const express = require('express')
const morgan = require('morgan');
const { join } = require('path');
const path = require('path');
const app = express();
const route = require('./routes/task.routes');
const  mongoose  = require('./database.js');

//Setting
 app.set('port', process.env.PORT || 3000);
 const PORT = app.get('port');


//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/task',route);


//Static files
app.use(express.static(path.join(__dirname, 'public')));


//SERVER
app.listen(PORT, () =>{
    console.log(`Server on port ${PORT}`);
});

