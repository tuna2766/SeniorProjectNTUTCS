const express = require("express");
const db = require('./config/db');
const app = express();
const port = 7000;
const cors = require('cors');
const Pool = require("mysql/lib/Pool");
const router = express.Router()

app.use(cors());

app.use(express.json());
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});


app.post("/signin",async function(req, res) {  
  let username = req.body.username 
  let password = req.body.password 
  var response = {
    "userName": "",
    "error": "",
    "state": ""
}
  let result = await db.sqlConnection(`SELECT * FROM account WHERE username='${username}' AND password='${password}'`)
  console.log(result[0])
  if(result.length !== 0){
      response["state"] = '200';
      response["userName"] = result[0].username
      res.json(response)

  }
  else{
    response["state"]='500'
    response["error"]='帳號不存在'

    res.json(response)
  }
  console.log(response.state)
});