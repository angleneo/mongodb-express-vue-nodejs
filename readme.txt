1.cd到vue目录下  npm install
2.删除db文件夹内所有数据
3.连接本地mongodb数据库  如（mongod --dbpath c:\user\administor\desktop\mongodb-express-vue-nodejs\db --port=27011)  指定端口为27011
4.更改vue/public 下 index.html中所有请求接口中的ip 替换为为本地的ip  端口号为3001
5.cd到vue 文件夹  输入npm start
6.访问localhost:3001/static/login.html 
管理员账号：lyy  密码：222222
普通用户账号: zzz  密码:111111
区别在于管理员账号可以编辑商品信息信息，普通用户没有编辑商品信息功能。

