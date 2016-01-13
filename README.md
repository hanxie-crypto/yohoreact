# yohoreact
这是我到目前为止能找到的最完善的react的例子
最初的来源是
github 上 react-webpack-node 项目
地址是 https://github.com/search?utf8=%E2%9C%93&q=react-webpack-node

#使用方法
#在根目录npm install就可以使用，可以触发package.json里面的script命令

#单独使用：
#一般先要构建一下
#npm run build  这个命令会把server用到的和client用到的东西统一的生成
放在pulic/assets文件夹下
#启动： npm start
#开发模式： npm run dev (跟npm start没区别，实际上都是在server中node index.js)
#我去掉了环境变量的设置，因为发现低版本Node中不兼容，原作是在node 5上搞得
所以没了开发和生产的区别
#测试：npm test
我写了4个测试用例，不过这边的测试只是针对client的，后续会完善服务端的东西


#启动后打开localhost:3000就可以看到我们大YOHO的导航页（然而这边并没有任何交互），以及material-ui的一些组件效果。接下来你任意在客户端改一个界面相关的组件，就会自动更新效果，这就是所谓的热启。稍后说明原因。

#先啰嗦下以前探索React的痛点，最开始了解到这个东西其实还是托了material-ui的福，http://www.material-ui.com/ 这是他们的官网，很前卫的一套组件。
当时看到这组ui的闪亮效果根本把持不住，于是如饥似渴的研究，后来就逐渐碰触到组件化,react,css in js,browsify,webpack,这些东西。最开始接触的话肯定会说什么乱七八糟的，然而这就是前端发展的产物，你不去接触就等于落后。
#说实话，学习React的时候对前面的基础没太大兴趣，直到看到数据交互特性的时候才提起了神。了解到它是在渲染前先从服务器端通过ajax拿到数据然后再渲染心理还会想总算ajax这个我认识。然而麻烦并没有因为有个熟悉的东西而少一点。
#就跟angular一样React 算是一个客户端的组件，那么数据获取的方式只能是异步的，这样不可避免的会遇到seo的问题，解决办法自然是有个在服务端渲染的方式，当然这个的确有,express用来渲染jsx的模板，git上也能搜出一些，我也尝试过，当渲染完毕后就死掉了，我如果想继续让他活，就有需要的把webpack或者browsify打包的一堆东西引入，最开始我还不知道，因为我没有触碰到react状态的东西。我不知道，即使把客户端的东西再引入一遍也没法保证第一次渲染的状态会保留到client。
#在开发Rreact Native 的时候又遇到了 state 崩乱的情况，真实凌乱的不行。好在facebook 接着给出了flux的解决方案，用专门的数据流管理state，防止直接修改state带来的一些列问题。再接着又出现了redux。用store，action，reducer三剑客运维 state，条例清晰可观可测。
忽略这些概念性的东西，让我阐明redux的话，就是更改state 需要 由action发出命令，由reducer执行，再通过监听者模式反馈到store里面，替换掉旧有的state.
一旦state更改，那么react组件也会跟着更新。











