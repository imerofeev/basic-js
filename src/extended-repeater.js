module.exports = function repeater(str, options) {
  if(options.separator === undefined)
  options.separator = '+';

  if(options.addition === undefined)
  options.additionRepeatTimes = 0;

  if(options.additionSeparator === undefined)
  options.additionSeparator = '';

  if(options.repeatTimes === undefined)
  options.repeatTimes = 1;

  if(options.additionRepeatTimes === undefined)
  options.additionRepeatTimes = 1;

  let tempStr1 = "";
  for(let i = 0; i < options.additionRepeatTimes; i++){
    if(i<options.additionRepeatTimes - 1){
      tempStr1 += options.addition + options.additionSeparator;
    }
    else{
      tempStr1 += options.addition;
    }
  }
  str += tempStr1;
  let tempStr2 = "";
  for(let i = 0; i < options.repeatTimes; i++){
    if(i < options.repeatTimes - 1){
      tempStr2 += str + options.separator;
    }
    else{
      tempStr2 += str;
    }
  }
  return tempStr2;
};
  