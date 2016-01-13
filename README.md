# yohoreact
这是我到目前为止能找到的最完善的react的例子
最初的来源是
github 上 react-webpack-node 项目
地址是 https://github.com/search?utf8=%E2%9C%93&q=react-webpack-node

使用方法：
基本上
在根目录npm install就可以使用，可以触发package.json里面的script命令

单独的
一般先要构建一下
npm run build  这个命令会把server用到的和client用到的东西统一的生成
放在pulic/assets文件夹下
启动： npm start
开发模式： npm run dev (跟npm start没区别，实际上都是在server中node index.js)
我去掉了环境变量的设置，因为发现低版本Node中不兼容，原作是在node 5上搞得
所以没了开发和生产的区别
