var yohobuybaseurl = 'http://127.0.0.1:8080';
module.exports = {
    title: 'yoho数据接口定义',
    version: '0.0.1',
    interfaces: [ {
        module: 'yohobuy',
        name: '接口2',
        id: 'navlist',
        type: 'post',
        url: yohobuybaseurl,
        suburl: '/navlist',
        mockconfig: {
            timeout: 0
        }
    }]
}