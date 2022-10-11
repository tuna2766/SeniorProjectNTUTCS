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

let user_Name=''

app.post("/signin",async function(req, res) {  
  var userID=0;
  let username = req.body.username 
  user_Name=username
  let password = req.body.password 
  var response = {
    "userName": "",
    "password": "",
    "email": "",
    "Phone_number": "",
    "Fishing_boat_name": "",
    "Fishing_area": "",
    "Fishing_License_Number": "",
    "error": "",
    "state": ""
}
  let result = await db.sqlConnection(`SELECT * FROM  member  WHERE User_name='${username}' AND Password='${password}'`)
  console.log(result[0])
  if(result.length !== 0){
      response["state"] = '200'
      response["userName"] = result[0].User_name
      response["password"] = result[0].Password
      response["email"] = result[0].Email
      response["Phone_number"] = result[0].Phone_number
      result = await db.sqlConnection(`SELECT ID FROM  member  WHERE User_name='${username}' AND Password='${password}'`)
      console.log(result[0])
      userID = result[0].ID
      result = await db.sqlConnection(`SELECT * FROM  fish_industry  WHERE member_ID='${userID}'`)
      if(result.length !== 0){
        console.log(result[0])
        response["Fishing_boat_name"] = result[0].Fishing_boat_name
        response["Fishing_area"] = result[0].Fishing_area
        response["Fishing_License_Number"] = result[0].Fishing_license_number
      }
      res.json(response)
  }
  else{
    response["state"]='500'
    response["error"]='帳號不存在'
    res.json(response)
  }


  console.log(result[0])
  console.log(response.state)
});



app.post("/register",async function(req, res) { 
  let username = req.body.username 
  let password = req.body.password
  let email = req.body.email 
  let Phone_number = req.body.Phone_number 
  let Fishing_boat_name = req.body.Fishing_boat_name 
  let Fishing_area = req.body.Fishing_area 
  let Fishing_License_Number = req.body.Fishing_License_Number 

  console.log(req.body)
  var response = {
    "userName": "",
    "error": "",
    "state": ""
}

  let  result = await db.sqlConnection(`SELECT MAX(ID) AS ID FROM member `)
       ID = parseInt(result[0].ID)+1;


       result = await db.sqlConnection(`SELECT MAX(Fish_Industry_ID) AS Fishing_ID FROM fish_industry `)
       Fish_ID = parseInt(result[0].Fishing_ID)+1;
       result = await db.sqlConnection(`SELECT * FROM member where User_name = '${username}'  `)
       if(result.length !==0){
        response["state"]='500'
        response["error"]='該帳號已經存在!'
        res.json(response)
       }
       else{
        result = await db.sqlConnection(`SELECT * FROM member where Phone_number = '${Phone_number}'  `)
        if(result.length !==0){
          response["state"]='500'
          response["error"]='電話號碼已註冊!'
          res.json(response)
        }
        else{
          result = await db.sqlConnection(`SELECT * FROM member where Email = '${email}'  `)
          if(result.length !==0){
            response["state"]='500'
            response["error"]='信箱已註冊!'
            res.json(response)
          }
          else{            
              result = await db.sqlConnection(`INSERT INTO member(ID,Email,User_name,Password,Phone_number) values ('${ID}','${email}','${username}','${password}','${Phone_number}') `)
              result = await db.sqlConnection(`INSERT INTO fish_industry(Fish_Industry_ID,Fishing_boat_name,fishing_area,Fishing_license_number,member_ID ) values ('${Fish_ID}','${Fishing_boat_name}','${Fishing_area}','${Fishing_License_Number}','${ID}') `)
              response["state"] = '200';
              res.json(response)
          }
        }
      }
      console.log(response.state)
});



app.post("/member/editAccountInfo",async function(req, res) { 
  let username = req.body.username 
  let password = req.body.password
  let email = req.body.email 
  let Phone_number = req.body.Phone_number 
  let Fishing_boat_name = req.body.Fishing_boat_name 
  let Fishing_area = req.body.Fishing_area 
  let Fishing_License_Number = req.body.Fishing_License_Number 
  console.log(username)
  console.log(email)
  console.log(password)
  console.log(Phone_number)
  console.log(Fishing_boat_name)
  console.log(Fishing_area)
  console.log(Fishing_License_Number)
  var response = {
    "userName": "",
    "error": "",
    "state": ""
}


  console.log(username)
  let result = await db.sqlConnection(`SELECT ID AS USER_ID FROM member WHERE User_name='${user_Name}' `)
  UserID = result[0].USER_ID;
   result = await db.sqlConnection(`SELECT * FROM member where Phone_number = '${Phone_number}'  `)
   if(result.length !==0){
     response["state"]='500'
     response["error"]='電話號碼已註冊!'
     res.json(response)
   }
   else{
     result = await db.sqlConnection(`SELECT * FROM member where Email = '${email}'  `)
     if(result.length !==0){
       response["state"]='500'
       response["error"]='信箱已註冊!'
       res.json(response)
     }
     else{    
        if(email.length !== 0){
          result = await db.sqlConnection(`UPDATE member SET Email = '${email}'  WHERE ID='${UserID}' `)
          result = await db.sqlConnection(`SELECT * FROM member  WHERE ID='${UserID}' `)
          response["email"] = result[0].Email
        } 
        if(password.length !== 0){
          result = await db.sqlConnection(`UPDATE member SET Password = '${password}'  WHERE ID='${UserID}' `)
          result = await db.sqlConnection(`SELECT * FROM member  WHERE ID='${UserID}' `)
          response["password"] = result[0].Password

        } 
        if(Phone_number.length !== 0){
          result = await db.sqlConnection(`UPDATE member SET Phone_number = '${Phone_number}'  WHERE ID='${UserID}' `)
          result = await db.sqlConnection(`SELECT * FROM member  WHERE ID='${UserID}' `)
          response["Phone_number"] = result[0].Phone_number
        } 
        result = await db.sqlConnection(`SELECT * FROM  fish_industry  WHERE member_ID='${UserID}'`)
        if(result.length!==0){
          if(Fishing_boat_name.length !== 0){
            result = await db.sqlConnection(`UPDATE fish_industry SET Fishing_boat_name = '${Fishing_boat_name}'  WHERE member_ID='${UserID}' `)
            result = await db.sqlConnection(`SELECT * FROM  fish_industry  WHERE member_ID='${UserID}'`)
            if(result.length !== 0){
              console.log(result[0])
              response["Fishing_License_Number"] = result[0].Fishing_license_number
            }
          } 
          if(Fishing_area.length !== 0){
            result = await db.sqlConnection(`UPDATE fish_industry SET Fishing_area = '${Fishing_area}'  WHERE member_ID='${UserID}' `)
            result = await db.sqlConnection(`SELECT * FROM  fish_industry  WHERE member_ID='${UserID}'`)
            if(result.length !== 0){
              console.log(result[0])
              response["Fishing_area"] = result[0].Fishing_area
            }
          }
          if(Fishing_License_Number.length !== 0){
            result = await db.sqlConnection(`UPDATE fish_industry SET Fishing_License_Number = '${Fishing_License_Number}'  WHERE member_ID='${UserID}' `)
            result = await db.sqlConnection(`SELECT * FROM  fish_industry  WHERE member_ID='${UserID}'`)
            if(result.length !== 0){
              console.log(result[0])
              response["Fishing_License_Number"] = result[0].Fishing_license_number
            }
          }
        }
        else{
          result = await db.sqlConnection(`SELECT MAX(Fish_Industry_ID) AS Fishing_ID FROM fish_industry `)
          Fish_ID = parseInt(result[0].Fishing_ID)+1;
          result = await db.sqlConnection(`INSERT INTO fish_industry(Fish_Industry_ID,Fishing_boat_name,fishing_area,Fishing_license_number,member_ID ) values ('${Fish_ID}','${Fishing_boat_name}','${Fishing_area}','${Fishing_License_Number}','${UserID}')  `)
        }  
         result = await db.sqlConnection(`SELECT * FROM member  WHERE ID='${UserID}' `)
         if(result.length !==0){
         response["userName"] = result[0].User_name        
        }
         response["state"] = '200'

         res.json(response)
     }
   }
  console.log(response.state)
  console.log(response.error)

});


app.get('/member/history', async (req, res, next) => {
  let username = user_Name 
  console.log(username)

  let result = await db.sqlConnection(`SELECT ID AS USER_ID FROM member WHERE User_name='${username}' `)
  USERID=result[0].USER_ID
  result = await db.sqlConnection(`SELECT Fish_Industry_ID  FROM fish_industry WHERE member_ID='${USERID}' `)
  Fish_I_ID=result[0].Fish_Industry_ID
  console.log(Fish_I_ID)
  response = [];
  result = await db.sqlConnection(`SELECT * FROM record where fish_industry_Fish_Industry_ID='${Fish_I_ID}' `);
  console.log(result);

  result.forEach(function (item, index, array) {
      response.push(item)
  });
  response["state"] = '200';
  console.log(response);

  res.send(response)

})

app.post("/record",async function(req, res) { 
  var today = new Date();
  var dateToday =( today.getFullYear()+ "-" + (today.getMonth()+1) + "-" + today.getDate())
  
  let email = req.body.email 
  let catch_date = dateToday
  let photo = req.body.photo 
  let fingerlings = req.body.fingerlings 
  let yield_of_catch = req.body.yield_of_catch 


  console.log(dateToday)
  var response = {
    "error": "",
    "state": ""
}
  let  result = await db.sqlConnection(`SELECT MAX(Record_ID) AS Record_ID FROM record `)
      RecordID = parseInt(result[0].Record_ID)+1

      result = await db.sqlConnection(`SELECT ID FROM member where Email = '${email}'  `)
      User_ID =result[0].ID
      result = await db.sqlConnection(`SELECT Fish_Industry_ID  FROM fish_industry WHERE member_ID='${User_ID}' `)
      Fish_I_ID=result[0].Fish_Industry_ID
      console.log(Fish_I_ID)
      
      result = await db.sqlConnection(`INSERT INTO record(Record_ID,catch_date,photo,fingerlings,yield_of_catch,fish_industry_Fish_Industry_ID ) values ('${RecordID}','${catch_date}','${photo}','${fingerlings}','${yield_of_catch}','${Fish_I_ID}')  `)
      response["state"] = '200';
      res.json(response)
      console.log(response.state)
      console.log(response.error)
});


app.get('/components/announcement', async (req, res, next) => {
  let result = await db.sqlConnection(`SELECT * FROM announcement `)
  response = [];
  console.log(result);

  result.forEach(function (item, index, array) {
      response.push(item['content'])
  });
  console.log(response);

  res.send(response)

})

