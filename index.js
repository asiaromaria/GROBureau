const  express  =  require('express');
const app = express();
const connectDB = require('./startup/db');
const cors = require('cors');



connectDB();


app.use(cors());
app.use(express.json()); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});