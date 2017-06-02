var express = require('express');
var Book = require('../schema/book');
var mongoose = require('mongoose');
var router = express.Router();

router.use(function(req,res,next){
    responseData={
        code:0,
        message:''
    }
    next();
})

router.get('/books',function(req,res){
	Book.find(function(err,books){
		if(err){
			res.send(err);
		}else{
			res.json(books);
		}
	})
});

router.post('/books',function(req,res){
		var book = new Book();
		book.name = req.body.name;
		book.author = req.body.author;
		book.age = req.body.age;

		book.save(function(err){
			if(err){
				res.send(err)
			}else{
				res.json({'status':'book created success'})
			}
		})
});


router.get('/books/:book_id',function(req,res){
     Book.findById(req.params.book_id, function(err, book) {
            if (err){
                res.send(err);
            }else{
                res.json(book);
            }
           
        } );
 }).put('/books/:book_id',function(req,res){
     Book.findById(req.params.book_id, function(err, book) {
            if (err){
                res.send(err);
            }else{
            book.name = req.body.name;  
            book.age = req.body.age;
            book.author = req.body.author;
            // 保存book
            book.save(function(err) {
                    if (err){
                    res.send(err);
                }else{
                    res.json({ message: 'Successfully update!' });
                }
            });
             }
        });
 }).delete('/books/:book_id',function(req, res) {
        Book.remove({
            _id: req.params.book_id
        }, function(err) {
            if (err){
                res.send(err);
            }else{
                res.json({ message: 'Successfully deleted' });
            }
         
        });
    });    

 router.delete('/books/',function(req,res){
    Book.remove({},function(err){
        if(err){
            res.send(err)
        }else{
             res.json({ message: 'Successfully deleted All!' });
        }
    })
 });

router.post('/books/bookname',function(req,res){
    var bookname = req.body.name;
    //数据库验证 查询相同用户名和密码记录是否存在,如果存在 登录成功
    Book.findOne({
       name:bookname
    }).then(function(booklist){
        if(!booklist){
            responseData.code=5;
            responseData.message='商品为空';
            res.json(responseData);
            return;
        }else{
                responseData.code=6;
                responseData.message='商品找到了！';
                responseData.booklist={
                    //返回_id，用户名，权限
                    _id:booklist._id,
                    name:booklist.name,
                    age:Number(booklist.age),
                    author:booklist.author
                }
                res.json(responseData);
                return;
                }
    })

})

module.exports = router;
