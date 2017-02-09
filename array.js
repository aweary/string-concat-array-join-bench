var isFunction = require('lodash/fp').isFunction

module.exports = function renderAttributesWithArray (attrs) {
  const attrString = [];

  for (var attrKey in attrs) {
    if (attrs.hasOwnProperty(attrKey) && attrKey !== "children") {
      var attrVal = attrs[attrKey];

      if (!attrVal || isFunction(attrVal)) { continue; }

      if (attrVal === true) {
        attrVal = "";
      } else if (attrKey === "style" && typeof attrVal === "object") {
        attrVal = `="${styleObjToString(attrVal)}"`;
      } else {
        attrVal = `="${attrVal}"`;
      }

      attrString.push(` ${attrKey}${attrVal}`);
    }
  }

  return attrString.join("");
}