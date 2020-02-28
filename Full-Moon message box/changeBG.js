'use strict';
var fs = require("fs");

function changePic12(){
    setInterval(function(){
        var data = "";
        data=data + fs.readFileSync('./time12.txt');
        var sendTime = parseInt(data);
        var time = new Date().getHours() + 1; 
        //if using winter time： var time = new Date().getHours();
        var waitTime = 0;
        if(sendTime>=time){
            waitTime = sendTime - time;
        }else{
            waitTime = sendTime - time + 24;
        }
        switch(waitTime){
            case 0: 
                var read = fs.readFileSync('./webs/images12/moon13.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 1: 
                var read = fs.readFileSync('./webs/images12/moon12.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 2: 
                var read = fs.readFileSync('./webs/images12/moon11.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 3: 
                var read = fs.readFileSync('./webs/images12/moon10.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 4: 
                var read = fs.readFileSync('./webs/images12/moon09.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 5: 
                var read = fs.readFileSync('./webs/images12/moon08.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 6: 
                var read = fs.readFileSync('./webs/images12/moon07.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 7: 
                var read = fs.readFileSync('./webs/images12/moon06.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 8: 
                var read = fs.readFileSync('./webs/images12/moon05.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 9: 
                var read = fs.readFileSync('./webs/images12/moon04.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 10: 
                var read = fs.readFileSync('./webs/images12/moon03.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 11: 
                var read = fs.readFileSync('./webs/images12/moon02.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 12: 
                var read = fs.readFileSync('./webs/images12/moon01.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 13: 
                var read = fs.readFileSync('./webs/images12/moon24.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 14: 
                var read = fs.readFileSync('./webs/images12/moon23.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 15: 
                var read = fs.readFileSync('./webs/images12/moon22.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 16: 
                var read = fs.readFileSync('./webs/images12/moon21.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 17: 
                var read = fs.readFileSync('./webs/images12/moon20.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 18: 
                var read = fs.readFileSync('./webs/images12/moon19.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 19: 
                var read = fs.readFileSync('./webs/images12/moon18.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 20: 
                var read = fs.readFileSync('./webs/images12/moon17.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 21: 
                var read = fs.readFileSync('./webs/images12/moon16.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 22: 
                var read = fs.readFileSync('./webs/images12/moon15.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            case 23: 
                var read = fs.readFileSync('./webs/images12/moon14.jpg');
                fs.writeFileSync('./webs/images12/moon.jpg',read);
                break;
            default:
                console.log("please check the code.");
        }
        
        },60000);
}

function changePic34(){
    setInterval(function(){
        var data = "";
        data=data + fs.readFileSync('./time34.txt');
        var sendTime = parseInt(data);
        var time = new Date().getHours()+2;
        var waitTime = 0;
        if(sendTime>=time){
            waitTime = sendTime - time;
        }else{
            waitTime = sendTime - time + 24;
        }
        switch(waitTime){
            case 0: 
                var read = fs.readFileSync('./webs/images34/moon13.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 1: 
                var read = fs.readFileSync('./webs/images34/moon12.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 2: 
                var read = fs.readFileSync('./webs/images34/moon11.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 3: 
                var read = fs.readFileSync('./webs/images34/moon10.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 4: 
                var read = fs.readFileSync('./webs/images34/moon09.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 5: 
                var read = fs.readFileSync('./webs/images34/moon08.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 6: 
                var read = fs.readFileSync('./webs/images34/moon07.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 7: 
                var read = fs.readFileSync('./webs/images34/moon06.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 8: 
                var read = fs.readFileSync('./webs/images34/moon05.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 9: 
                var read = fs.readFileSync('./webs/images34/moon04.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 10: 
                var read = fs.readFileSync('./webs/images34/moon03.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 11: 
                var read = fs.readFileSync('./webs/images34/moon02.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 12: 
                var read = fs.readFileSync('./webs/images34/moon01.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 13: 
                var read = fs.readFileSync('./webs/images34/moon24.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 14: 
                var read = fs.readFileSync('./webs/images34/moon23.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 15: 
                var read = fs.readFileSync('./webs/images34/moon22.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 16: 
                var read = fs.readFileSync('./webs/images34/moon21.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 17: 
                var read = fs.readFileSync('./webs/images34/moon20.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 18: 
                var read = fs.readFileSync('./webs/images34/moon19.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 19: 
                var read = fs.readFileSync('./webs/images34/moon18.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 20: 
                var read = fs.readFileSync('./webs/images34/moon17.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 21: 
                var read = fs.readFileSync('./webs/images34/moon16.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 22: 
                var read = fs.readFileSync('./webs/images34/moon15.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            case 23: 
                var read = fs.readFileSync('./webs/images34/moon14.jpg');
                fs.writeFileSync('./webs/images34/moon.jpg',read);
                break;
            default:
                console.log("please check the code.");
        }
        
        },60000);
}
module.exports.changePic12 = changePic12;
module.exports.changePic34 = changePic34;
