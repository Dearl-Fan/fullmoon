// Import all the related libraries
var fs = require('fs'); //library of fileStream
var express = require('express'); //libraby of Express
var multer  = require('multer'); //library for filestoriage 
var bodyParser = require('body-parser');

var changeBG = require('./changeBG');
var print = require('./print');
var printSetting = require('./printSetting');
var password = require('./webs/password');
var logger = require('./logger');
//Get for all the possible web-pages
var app = express();
app.use(bodyParser.urlencoded({ extended: false })); //use bodyparse need a enctype="application/x-www-form-urlencoded" in form
//first user-group, user 1 and 2
app.get('/webs/favicon.png', function(req, res) {
  res.sendFile(__dirname + '/webs/favicon.png');
});

app.get('/images12/moon.jpg', function(req, res) {
  res.sendFile(__dirname + '/webs/images12/moon.jpg');
});

app.get('/images34/moon.jpg', function(req, res) {
  res.sendFile(__dirname + '/webs/images34/moon.jpg');
});

app.get('/home1',function(request, response){
    response.sendFile(__dirname + "/webs/homepage1.html");
})

app.get('/home2',function(request, response){ 
  response.sendFile(__dirname + "/webs/homepage2.html");
})

app.get('/user1',function(request, response){ 
  logger.info("user 1 get into draw page."+ '<br>');
  response.sendFile(__dirname + "/webs/User1Drawpage.html");
})

app.get('/user2',function(request, response){
  logger.info("user 2 get into draw page."+ '<br>');
    response.sendFile(__dirname + "/webs/User2Drawpage.html");
})

app.get('/setting1',function(request, response){ 
    response.sendFile(__dirname + "/webs/setting1.html");
})

app.get('/setting2',function(request, response){ 
  response.sendFile(__dirname + "/webs/setting2.html");
})

//second user-group, user 3 and 4
app.get('/home3',function(request, response){
  response.sendFile(__dirname + "/webs/homepage3.html");
})

app.get('/home4',function(request, response){ 
response.sendFile(__dirname + "/webs/homepage4.html");
})

app.get('/user3',function(request, response){ 
  logger.info("user 3 get into draw page."+ '<br>');
  response.sendFile(__dirname + "/webs/User3Drawpage.html");
})

app.get('/user4',function(request, response){
  logger.info("user 4 get into draw page."+ '<br>');
  response.sendFile(__dirname + "/webs/User4Drawpage.html");
})

app.get('/setting3',function(request, response){ 
  response.sendFile(__dirname + "/webs/setting3.html");
})

app.get('/setting4',function(request, response){ 
  response.sendFile(__dirname + "/webs/setting4.html");
})

app.get('/control',function(request, response){ 
  response.sendFile(__dirname + "/webs/backControl.html");
})

app.get('/usage.log',function(request, response){ 
  response.sendFile(__dirname + '/usage.log');
  
})

//file revieces form the users and save in local
//1. Creat 4 local folders for each user

var createFolder = function(folder) {//try to build a folder is it is not exist
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
};

var uploadFolderUser1 = './to2/';
var uploadFolderUser2 = './to1/';
var uploadFolderUser3 = './to4/';
var uploadFolderUser4 = './to3/';
createFolder(uploadFolderUser1);//call to creat a folder for user 1 send to user 2
createFolder(uploadFolderUser2);//call to creat a folder for user 2 send to user 1
createFolder(uploadFolderUser3);//call to creat a folder for user 1 send to user 2
createFolder(uploadFolderUser4);//call to creat a folder for user 2 send to user 1

//2.1 store the uploaded message from user 1
/*
var storage1 = multer.diskStorage({
    destination: uploadFolderUser1,
    filename: "message.jpg"
  });*/

  var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolderUser1);
    },
    filename: function (req, file, cb) {
        var filename = "message.jpg";
      cb(null, filename);
    }
  })
   
  var to2 = multer({ storage: storage1});

  app.post('/user1', to2.single('message'), function (req, res) {
    logger.info("user 1 uploaded a message."+ '<br>');
      res.sendFile(__dirname + "/webs/User1Drawpage.html");
  });

//2.2 store the uploaded message from user 2
var storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolderUser2);
  },
  filename: function (req, file, cb) {
      var filename = "message.jpg";
    cb(null, filename);
  }
})
 
var to2 = multer({ storage: storage2});

app.post('/user2', to2.single('message'), function (req, res) {
  logger.info("user 2 uploaded a message."+ '<br>');
    res.sendFile(__dirname + "/webs/User2Drawpage.html");
});

//get the timeSetting of 1.2

app.post('/setting1',function(req,res){
    var time = "";
    time  = time + req.body.time;
    fs.writeFileSync('time12.txt', time);
  res.sendFile(__dirname + "/webs/setting1.html");
})

app.post('/setting2',function(req,res){
  var time = "";
  time  = time + req.body.time;
  fs.writeFileSync('time12.txt', time);
  res.sendFile(__dirname + "/webs/setting2.html");
})

//2.3 store the uploaded message from user 3
var storage3 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolderUser3);
  },
  filename: function (req, file, cb) {
      var filename = "message.jpg";
    cb(null, filename);
  }
})
 
var to4 = multer({ storage: storage3});

app.post('/user3', to4.single('message'), function (req, res) {
  logger.info("user 3 uploaded a message."+ '<br>');
    res.sendFile(__dirname + "/webs/User3Drawpage.html");
});

//2.4 store the uploaded message from user 4
var storage4 = multer.diskStorage({
destination: function (req, file, cb) {
  cb(null, uploadFolderUser4);
},
filename: function (req, file, cb) {
    var filename = "message.jpg";
  cb(null, filename);
}
})

var to3 = multer({ storage: storage4});

app.post('/user4', to3.single('message'), function (req, res) {
  logger.info("user 4 uploaded a message."+ '<br>');
  res.sendFile(__dirname + "/webs/User4Drawpage.html");
});

//get the timeSetting of 1.2

app.post('/setting3',function(req,res){
var time = "";
time  = time + req.body.time;
fs.writeFileSync('time34.txt', time);
res.sendFile(__dirname + "/webs/setting3.html");
})

app.post('/setting4',function(req,res){
  var time = "";
  time  = time + req.body.time;
  fs.writeFileSync('time34.txt', time);
  res.sendFile(__dirname + "/webs/setting4.html");
})

//give Enddevice a way to get the picture needed to print and print time
app.get('/to1/message.jpg', function(req, res) {
  res.sendFile(__dirname + '/to1/message.jpg');
});

app.get('/to2/message.jpg', function(req, res) {
  res.sendFile(__dirname + '/to2/message.jpg');
});

app.get('/to3/message.jpg', function(req, res) {
  res.sendFile(__dirname + '/to3/message.jpg');
});

app.get('/to4/message.jpg', function(req, res) {
  res.sendFile(__dirname + '/to4/message.jpg');
});

app.get('/time12.txt', function(req, res) {
  res.sendFile(__dirname + '/time12.txt');
});

app.get('/time34.txt', function(req, res) {
  res.sendFile(__dirname + '/time34.txt');
});

//manulle control restart ptint
app.post('/restart1',function(req,res){
  printSetting.printPic1();
  res.sendFile(__dirname + "/webs/backControl.html");
})

app.post('/restart2',function(req,res){
  printSetting.printPic2();
  res.sendFile(__dirname + "/webs/backControl.html");
})

app.post('/restart3',function(req,res){
  printSetting.printPic3();
  res.sendFile(__dirname + "/webs/backControl.html");
})

app.post('/restart4',function(req,res){
  printSetting.printPic4();
  res.sendFile(__dirname + "/webs/backControl.html");
})

//passwort control

app.get('/password1',function(req,res){
  res.send(password.user1);
})

app.post('/password1',function(req,res){
  password.user1 = req.body.password;
  res.sendFile(__dirname + "/webs/setting1.html");
})

app.get('/password2',function(req,res){
  res.send(password.user2);
})

app.post('/password2',function(req,res){
  password.user2 = req.body.password;
  res.sendFile(__dirname + "/webs/setting2.html");
})

app.get('/password3',function(req,res){
  res.send(password.user3);
})

app.post('/password3',function(req,res){
  password.user3 = req.body.password;
  res.sendFile(__dirname + "/webs/setting3.html");
})

app.get('/password4',function(req,res){
  res.send(password.user4);
})

app.post('/password4',function(req,res){
  password.user4 = req.body.password;
  res.sendFile(__dirname + "/webs/setting4.html");
})
//control The background Pic of homepage
changeBG.changePic12();
changeBG.changePic34();
print.checkTimeAndPrint();
// server runs on localhost:3000
app.listen(3000);
console.log('server runs on localhost:3000'); 
