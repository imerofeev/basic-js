module.exports = function getSeason(date) {
  if (date == undefined || date == 0) return 'Unable to determine the time of year!';
  let t = {}.toString.call(date);
  
  if (!date instanceof Date || !t.includes('Date')) throw new Error();
  
  if(date.getMonth() >1 &&  date.getMonth()<5)
  return 'spring';
  if(date.getMonth() >4 &&  date.getMonth()<8)
  return 'summer';
  if(date.getMonth() >7 &&  date.getMonth()<11)
  return 'autumn';
  return 'winter';
};
