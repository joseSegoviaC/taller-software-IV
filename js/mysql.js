const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ts4'
});

connection.connect((error)=>{
    if(error){
        console.log(`Salio un error n° ${error.code} inesperado:  ${error.message}`);
    }else{
        console.log("CONECCION EXITOSA");
    }
});




