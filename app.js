const express = require('express');
const app = express();
require('./config/db')
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const profileRouter = require('./routes/profileRouter');
const purchaseRouter = require('./routes/purchaseRouter');
const spendingHabitRouter =  require('./routes/spendingHabitRouter')




//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

//importing routes
app.use('/auth/user', userRouter)
app.use('/auth/userprofile', profileRouter)
app.use('/auth/user', purchaseRouter)
app.use('/auth/user', spendingHabitRouter);


const port = process.env.PORT || 9090;
app.listen(port, ()=>{
    console.log('Server is listening on port: " ' + port);
});
