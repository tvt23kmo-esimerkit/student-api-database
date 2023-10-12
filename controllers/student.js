const express=require('express');
const router=express.Router();
const student=require('../models/student_model');

router.get('/',function(request,response){
    student.getAllStudents(function(err, data){
        if(err){
            console.log(err);
            response.json("tietokantavirhe");
        }
        else{
            response.send(data);
        }
    });
});

router.get('/:id',function(request,response){
    let data=student.getOneStudent(request.params.id,function(err, data){
        if(err){
            response.json(err);
        }
        else{
            response.send(data[0]);
        }
    });
});

router.post('/',function(request,response){
    console.log(request.body);
    student.addStudent(request.body,function(err, data){
        if(err){
            response.json(err);
        }
        else{
            response.send(data);
        }
    });
});

router.put('/:id',function(request,response){
    let data=student.updateStudent(request.params.id);
    response.json(data);
});

router.delete('/:id',function(request,response){
    let data=student.deleteStudent(request.params.id);
    response.json(data);
});

module.exports=router;