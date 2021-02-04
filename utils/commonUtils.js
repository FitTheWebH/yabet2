var moment = require("moment");
require("moment-timezone");

////////////////////////////////////////////////////////////////////////////////////////////////////////
////     const { YEAR, MONTH, DATE, TIME } = await CURRENT_TIME();                                  ////
////////////////////////////////////////////////////////////////////////////////////////////////////////
export const CURRENT_TIME = async () => {
  moment.tz.setDefault("Asia/Seoul");

  var date = moment().format("YYYY-MM-DD HH:mm:ss");

  return date;
};
