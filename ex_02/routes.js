var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var StudentModel = require('./studentschema');
var query = "mongodb+srv://shany:shany@cluster0.1xqbrsv.mongodb.net/mern-pool?retryWrites=true&w=majority";

const db = (query);
mongoose.Promise = global.Promise;
mongoose.connect(db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (error) {
        if (error) {
            console.log("Error!" + error);
        }
    }
);

router.route('/saveRegister')
    .post((req, res) => {
        var newStudent = new StudentModel();
        newStudent.login = req.body.login;
        newStudent.email = req.body.email;
        newStudent.password = req.body.password;
        newStudent.type = false;
        newStudent.save(function (err, data) {
            if (err) {
                console.log(error);
            }
            else {
                res.send("ok");
            }
        });
    })


router.post('/findEmail', function (req , res) {
    console.log(req.body);
    StudentModel.findOne({ email: req.body.email } , function (err, data) {
        if (err) {
            return handleError(err)
        }
        else {
            res.send(data);
        }
    });
})


router.get('/save', function (req, res) {
    var newStudent = new StudentModel({
        login: 'shanyahsam',
        email: 'shany@blabla.com',
        password: "1234shany",
        type: false
    });

    newStudent.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});


router.get('/findall', function (req, res) {
    StudentModel.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});


module.exports = router;