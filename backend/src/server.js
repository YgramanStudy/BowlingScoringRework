const express = require('express'); 
const cors = require('cors');



const app = express();  

app.use(cors({credentials: true,origin:["http://localhost:4200"]}))
app.use(express.json());





const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:"+port)

})