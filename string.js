var {isFunction} = require('lodash/fp')


module.exports = function renderAttributesWithString (attrs) {
  let attrString = '';

  for (let attrKey in attrs) {
    if (attrs.hasOwnProperty(attrKey) && attrKey !== "children") {
      let attrVal = attrs[attrKey];

      if (!attrVal || isFunction(attrVal)) { continue; }

      if (attrVal === true) {
        attrVal = "";
      } else if (attrKey === "style" && typeof attrVal === "object") {
        attrVal = `="${styleObjToString(attrVal)}"`;
      } else {
        attrVal = `="${attrVal}"`;
      }

      attrString += ` ${attrKey}${attrVal}`;
    }
  }
  return attrString;
}