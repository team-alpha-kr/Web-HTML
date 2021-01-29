var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var connection = mysql.createConnection({
  host     : 'yhs.kr',
  user     : 'tm_alpha',
  password : 'I@1972mg-root!',
  database : 'dashboard'
});
  
exports.query_run = function query_run(query) {
    connection.connect();
    
    connection.query(query, function (error, results, fields) {
        if (error) {
            return console.log(error);
        }
        return console.log("OK");
    });
    
    connection.end();
}