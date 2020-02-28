const printSetting = require('./printSetting');
var fs = require('fs');
var logger = require('./logger');


function printOut(){
    var time12 = '';
    //time12 = parseInt(time12 + fs.readFileSync('./time12.txt','utf8'))-1;
    time12 = parseInt(time12 + fs.readFileSync('./time12.txt','utf8'));
    var time34 = '';
    //time34 = parseInt(time34 + fs.readFileSync('./time34.txt','utf8'))-1;
    time34 = parseInt(time34 + fs.readFileSync('./time34.txt','utf8'));
    console.log("printTime: 12 = " + time12);
    console.log("printTime: 34 = " + time34);
    logger.debug("printTime: 12 = " + time12 + '<br>');
    logger.debug("printTime: 34 = " + time34 + '<br>');
    var nowHour = new Date().getHours()+2;
    console.log("nowTime: " + nowHour);
    logger.debug("nowTime: " + nowHour + '<br>');
    if(nowHour === time12){
        printSetting.printPic1();
        printSetting.printPic2();
    }else{
        console.log("It is not the time for user-group 12. retury on next hour.")
        logger.debug("It is not the time for user-group 12. retury on next hour." + '<br>')
    };

    if(nowHour === time34){
        printSetting.printPic3();
        printSetting.printPic4();
    }else{
        console.log("It is not the time for user-group 34. retury on next hour.")
        logger.debug("It is not the time for user-group 34. retury on next hour." + '<br>')
    };
}

function checkTimeAndPrint(){
    printOut();
    var nowtime = new Date().getMinutes();
    logger.debug(nowtime + '<br>');
    var waittime = 3600000-nowtime*60000;
    logger.debug(waittime + '<br>');

    setTimeout(function(){
        printOut();
        setTimeout(function(){
            setInterval(function(){
                printOut();
            },60*60*1000)
        },1000)
    }, waittime);
}

module.exports.checkTimeAndPrint = checkTimeAndPrint;