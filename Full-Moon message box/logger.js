var log4js = require('log4js');

log4js.configure({
	appenders: { usage: { type: 'file', filename: './usage.log' } },
	categories: { default: { appenders: ['usage'], level: 'all' } }
});

const logger = log4js.getLogger('usage');

logger.debug("<br>");

logger.info("<br>")
logger.error("<br>");



module.exports = logger;