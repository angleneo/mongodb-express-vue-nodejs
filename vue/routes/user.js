var express = require('express');
var Users = require('../schema/users');
var mongoose = require('mongoose');
var cookies = require('cookies');
var router = express.Router();
var responseData;

router.use(function(req,res,next){
    responseData={
        code:0,
        message:''
    }
    next();
})

router.get('/login',function(req,res,next){
        // console.log('register');
        Users.find(function(err,users){
                if(err){
            res.send(err);
                }else{
                    res.json(users);
                }
        })
});
//  注册功能接口
// router.post('/login',function(req,res,next){
//         var userna = req.body.username;
//         var pwd = req.body.password;

//         if(userna == ''){
//             responseData.code=1;
//             responseData.message='用户名不能为空';
//             res.json(responseData);
//             return;
//         }
//         if(pwd == ''){
//              responseData.code=2;
//             responseData.message='密码不能为空';
//             res.json(responseData);
//             return;
//         }

//         Users.findOne({
//             username:username
//         }).then(function(userinfo){
//             if(userinfo){
//                 responseData.code=4;
//                 responseData.message='用户名已经被注册';
//                 res.json(responseData);
//                 return;
//             }
//             //保存到数据库中
//             var users = new Users({
//                 username:username,
//                 password:password
//             });
//             return users.save();
//         }).then(function(newUserInfo){
//             responseData.message='注册成功！';
//             res.json(responseData);
//         })
//         responseData.message='登录成功';
//         res.json(responseData);
// })


// 登录
router.post('/login',function(req,res){
    var user = req.body.username;
    var pwd = req.body.password;
    if(user==''||pwd==''){
        responseData.code=1;
        responseData.message='用户名和密码不能为空';
        res.json(responseData);
        return;
    }

    //数据库验证 查询相同用户名和密码记录是否存在,如果存在 登录成功
    Users.findOne({
        username:user,
        password:pwd
    }).then(function(userInfo){
        if(!userInfo){
            responseData.code=2;
            responseData.message='用户名和密码错误';
            res.json(responseData);
            return;
        }
        responseData.code=3;
        responseData.message='登录成功';
        responseData.userInfo={
            //返回_id，用户名，权限
            _id:userInfo._id,
            username:userInfo.username,
            login:userInfo.login
        }
    //  req.cookies.set('userInfo',JSON.stringify({
    //       _id:userInfo._id,
    //       username:userInfo.username
    // }));
    //     req.cookies.set('userInfo',123);
        // res.json(cookies);
        res.json(responseData);
        return;
    })

})

module.exports = router;
