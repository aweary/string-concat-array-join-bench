var isFunction = require('lodash/fp').isFunction


function renderAttributesWithString (attrs) {
  var attrString = '';

  for (var attrKey in attrs) {
    if (attrs.hasOwnProperty(attrKey) && attrKey !== "children") {
      var attrVal = attrs[attrKey];

      if (!attrVal || isFunction(attrVal)) { continue; }

      attrString += ' ';
      attrString += attrKey;

      if (attrVal === true) {
        // nothing
      } else if (attrKey === "style" && typeof attrVal === "object") {
        attrString += '="'
        attrString += styleObjToString(attrVal);
        attrString += '"';
      } else {
        attrString += '="'
        attrString += attrVal;
        attrString += '"';
      }
    }
  }
  return attrString;
}

function renderAttributesWithTemplateString (attrs) {
  var attrString = '';

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

      attrString += ` ${attrKey}${attrVal}`;
    }
  }
  return attrString;
}

module.exports = {
  renderAttributesWithString,
  renderAttributesWithTemplateString,
}