var express = require('express');
var Book = require('../schema/book');
var mongoose = require('mongoose');
var router = express.Router();


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
 })


module.exports = router;
