此项目运用知识点较多，前端为vue，数据传输使用vue-resource，由于页面较少并没有使用路由等功能，引用方式为传统script src引入。
后端为nodejs，使用express脚手架开发，数据库为mongodb。
采用现流行Restful API的形式做前后端分离开发，后端操作数据库开发接口以及功能，前端vue负责调用nodejs产生的接口。
ps：现阶段前端数据耦合度高，页面中暴露接口地址，后期会进行优化。
1.cd到vue目录下  npm install
2.删除db文件夹内所有数据
3.连接本地mongodb数据库  如（mongod --dbpath c:\user\administor\desktop\mongodb-express-vue-nodejs\db --port=27011)  指定端口为27011
4.更改vue/public 下login.html和index.html中所有请求接口中的ip 替换为为本地的ip  端口号为3001.如 http://192.168.1.163 改为本地ip，后面跟:3001
5.cd到vue 文件夹  输入npm start
6.访问localhost:3001/static/login.html 
管理员账号：lyy  密码：222222
普通用户账号: zzz  密码:111111
区别在于管理员账号可以编辑商品信息信息，普通用户没有编辑商品信息功能。

