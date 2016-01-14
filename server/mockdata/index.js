var fs = require('fs');
var path = require('path').resolve(__dirname, './jsondata');
var fileList = [];
var mockdataname = [];
var mockdatamap = {}

function readFile(path) {
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item) {
        if (fs.statSync(path + '/' + item).isDirectory()) {
            return;
        } else {
            if (item.indexOf('.json') !== -1) {
                fileList.push(path + '/' + item);
                mockdataname.push(item.replace('.json', ''));
            }
        }
    });
}

function exeMockData() {
    console.log(fileList);
    fileList.forEach(function(path, index) {
        console.log(path,'模拟数据文件');
        mockdatamap[mockdataname[index]] = JSON.parse(fs.readFileSync(path, {
            encoding: 'utf8'
        }));
    })

}

readFile(path);
exeMockData();

module.exports = mockdatamap;