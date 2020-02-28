
const axios = require('axios')
const moment = require('moment')
const iconv = require('iconv-lite')
const base64 = require('base64image')

const logger = require('./logger')


/*memobird API KEY
c5f0c2df29521c5b = MB001
66afdac4278a14f7 = MB002
f1357ec4e808d3fd = MB003
f237b91a3f1989bf = MB004
*/

const api = {
  bind: 'http://api.Memobird.cn/home/setuserbind',
  print: 'http://api.memobird.cn/home/printpaper',
  watch: 'http://api.Memobird.cn/home/getprintstatus',
  image: 'http://open.memobird.cn/home/getSignalBase64Pic',
  url: 'http://open.memobird.cn/home/printpaperFromUrl',
  html: 'http://open.memobird.cn/home/printpaperFromHtml'
};

function getData (api, data) {
    return new Promise((resolve, reject) => {
        axios.post(api, data)
        .then((res) => {
            if (res.data.showapi_res_code === 1) {
                console.log('Asynchronous request = ok')
                logger.debug('Asynchronous request = ok' + '<br>')
                resolve(res.data)
            } else {
                reject(res)
                logger.debug(res)
                logger.debug('<br>')
            }
        })
        .catch( (err) => {
            reject(err)
            logger.error(err)
            logger.error('<br>')
        })
    })
}

function getBase64(api) {
    return new Promise((resolve, reject) => {
        var options = {string: true};

        base64.base64encoder(api, options, function (err, image) {
            if (err) {
                reject(err);
            }
            resolve(image);
        });
    })
}

function MemobirdImage(config, url){
    let base64Data
    getBase64(url).then(res => {
        return getData(api.image, {ak:config.ak, imgBase64String: res})
    })
    .then(res => {
        base64Data = res.result
        return getData(api.bind, config)
    })
    .then((res) => {
        logger.debug('********printImage start********' + '<br>')
        let initRes = res;
        let print = {
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
            ak: config.ak,
            memobirdID: config.memobirdID,
            userID: initRes.showapi_userid,
            printcontent: `P:${base64Data}`
        }
        //print starts
        return getData(api.print, print)
    })
    .then( (res) => {
        let initRes = res;
        logger.debug('********printDate start********' + '<br>')
        var date = new Date();
        var printDate = "";
        printDate = printDate + date.toLocaleString( );
        let print = {
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
            ak: config.ak,
            memobirdID: config.memobirdID,
            userID: initRes.showapi_userid,
            printcontent:  `T:${iconv.encode(printDate, 'gbk').toString('base64')}`
        }
        //print starts
        return getData(api.print, print)
    })
    .then((res)=>{
        logger.debug('print COMPLETE: ' + res  + '<br>');
        logger.debug(res);
        logger.debug('<br>')
    })
    .catch( (err) => {
        logger.error('print ERROR: ');
        logger.debug(err);
        logger.debug('<br>')
    })
}

function MemobirdText(config, message){
    getData(api.bind, config)
            .then( (res) => {
                let initRes = res;
                console.log('********printText start********')
                let print = {
                    timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
                    ak: config.ak,
                    memobirdID: config.memobirdID,
                    userID: initRes.showapi_userid,
                    printcontent:  `T:${iconv.encode(message, 'gbk').toString('base64')}`
                }
                //print starts
                return getData(api.print, print)
            })
            .then((res) => {
                console.log('print COMPLETE: ');
                console.log(res);
            })
            .catch( (err) => {
                console.log('print ERROR: ');
                console.log(err);
            })
}

module.exports.MemobirdImage = MemobirdImage;
module.exports.MemobirdText = MemobirdText;