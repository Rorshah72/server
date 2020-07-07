const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "my_db",
  password: ""
});


connection.connect(function (err){
  if(err){
    console.log(err);
    return err;
  }else{
    console.log('Database ------> OK!!!!!!');
  }
});

let query = "SELECT * FROM users";

connection.query(query, (err, result, field) => {
  console.log(err);
  console.log(result);
  for(let i = 0; i < result.length; i++){
      user[i] = new ClassUser(result[i].Name,result[i].Secondname ,result[i].Email,result[i].Password,result[i].Phone);
      console.log(user[i].getName());
  }
  //console.log(field);
});
