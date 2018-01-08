//sql语句

var sqlMap = {
    user:{
        add : 'insert into user(id,password,phone,email) values(?,?,?,?)',
        check: 'select * from user where id= ? and password = ?'
    }
}

module.exports =sqlMap;