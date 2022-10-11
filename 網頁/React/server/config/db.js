const mysql = require("mysql");

// connect MySQL
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "mydb_new",
});

let  sqlConnection = (sql) =>{
    return new Promise((resovle,reject)=>{
        connection.query(sql,(err,result)=>{
            if(err){
                return reject(err)
            }
            return resovle(result)
        })
        
    })
    
}

module.exports = {sqlConnection}