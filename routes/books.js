const express = require('express');
const router= express.Router()
const Book = require('../models/book');

 // getting all books 
 
 router.get('/', async(req,res) =>{
      try{ const books = await Book.find();
         res.json(books);
        }
        catch (err){ res.json({message:err}); 
    }
});

// getting a book by id

router.get('/:bookid', async(req,res) =>{
     try{ const book = await Book.findById(req.params.bookid); res.json(book); 
    }
    catch(err){ res.json({message:err}); 
} 
});

//http route methods

//create a book
router.post('/',(req,res)=>{
    const book=new Book({
        title:req.body.title,
        price:req.body.price,
        author:req.body.author,
        publisher:{name:req.body.publisher.name,
            city:{cityname:req.body.publisher.city.cityname,
            zipcode:req.body.publisher.city.zipcode}}
    });
    book.save().
    then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    })
});

// deleting a book

router.delete('/:bookid', async(req,res) =>{
     try{
          const removebook = await Book.deleteOne({_id: req.params.bookid});
      res.json(removebook); 
    }
    catch(err){
         res.json({message:err}); 
        } 
    }); 

// updating a book by id

router.patch('/:bookid', async(req,res) =>{
     try{ 
         const editbook = await Book.updateOne({_id: req.params.bookid});
      res.json(editbook); 
    }
    catch(err){ 
        res.json({message:err});
     }
     });


module.exports=router;
