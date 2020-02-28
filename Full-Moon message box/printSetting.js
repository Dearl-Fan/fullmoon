'use strict';
/*
const Memobird = require('./node_modules/memobird');
const config = require('./config');
var fs = require ('fs');
*/
const memobird = require('./memobird');
const moment = require('moment');

//sample of print configuration
function config1(){
  return {
    ak: "d3cb21949b7e400e9dcccb4d01fc3fde",
    memobirdID: "c5f0c2df29521c5b",
    useridentifying : "596947",
    timestamp:moment().format('YYYY-MM-DD HH:mm:ss')
  }
}

function config2(){
  return {
    ak: "d3cb21949b7e400e9dcccb4d01fc3fde",
    memobirdID: "66afdac4278a14f7",
    useridentifying : "596947",
    timestamp:moment().format('YYYY-MM-DD HH:mm:ss')
  }
}

function config3(){
  return {
    ak: "d3cb21949b7e400e9dcccb4d01fc3fde",
    memobirdID: "f1357ec4e808d3fd",
    useridentifying : "596947",
    timestamp:moment().format('YYYY-MM-DD HH:mm:ss')
  }
}

function config4(){
  return {
    ak: "d3cb21949b7e400e9dcccb4d01fc3fde",
    memobirdID: "f237b91a3f1989bf",
    useridentifying : "596947",
    timestamp:moment().format('YYYY-MM-DD HH:mm:ss')
  }
}
//Define the URLs of messages
var url1 = 'http://homer.informatik.tu-chemnitz.de:22010/to1/message.jpg';
var url2 = 'http://homer.informatik.tu-chemnitz.de:22010/to2/message.jpg';
var url3 = 'http://homer.informatik.tu-chemnitz.de:22010/to3/message.jpg';
var url4 = 'http://homer.informatik.tu-chemnitz.de:22010/to4/message.jpg';

var printText1 = function(text){  
  memobird.MemobirdText(config1(), text);
}
// inject parameters into print pattern
var printPic1 = function () {
   memobird.MemobirdImage(config1(), url1);
}

var printText2 = function(text){  
  memobird.MemobirdText(config2(), text);
}

var printPic2 = function () {
   memobird.MemobirdImage(config2(), url2);
}

var printText3 = function(text){  
  memobird.MemobirdText(config3(), text);
}

var printPic3 = function () {
   memobird.MemobirdImage(config3(), url3);
}

var printText4 = function(text){  
  memobird.MemobirdText(config4(), text);
}

var printPic4 = function () {
   memobird.MemobirdImage(config4(), url4);
}

module.exports.printText1 = printText1;
module.exports.printPic1 = printPic1;
module.exports.printText2 = printText2;
module.exports.printPic2 = printPic2;
module.exports.printText3 = printText3;
module.exports.printPic3 = printPic3;
module.exports.printText4 = printText4;
module.exports.printPic4 = printPic4;


