var config = {
    baseurl: 'http://127.0.0.1:8888/',
    basepicpath: 'public/',
    serverurl: 'http://127.0.0.1:4000/',
    proxyserver: 'http://localhost:8080',
    mysql: {
        host: 'localhost',
        port: '3306',
        database: 'yohotest',
        charset: 'utf8_general_ci',
        user: 'root',
        password: 'ww3ww3',
        multipleStatements: true
    },
    mongo: {
        db: 'mongodb://127.0.0.1/wqdb'
    },
    redis_db: 0,
    redis_host: '115.28.8.74',
    redis_port: 6379,
    session_secret: 'yohodd', 
    auth_cookie_name: 'yohodd',
    agentconfig: { //代理配置
        timeout: 10000,
        contenttype: 'application/json'
    },
    mockconfig: {
        timeout: 2000,
        contenttype: 'application/json'
    }
}
module.exports = config;