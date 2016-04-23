"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{"default":r}}function findDurationTagInString(r){if(void 0!==r){var e=r.match(/^<[^>]*>/)||[];if(!e.length)return!1;if(e.length>1)throw Error("multiple durations in a single str.",r);var n=e[0];return n.substr(1,n.length-2)}}function parseDurationTag(r){var e={};return _underscore2["default"].each(r.split(":"),function(n){var t=n.match(/[^0-9]+/gi);if(!t)throw new Error("missing duration unit for "+n+" in "+r);if(t.length>1)throw Error("invalid duration unit for "+n+". missing : separator?");t=t[0];var i=unitCodes[t];if(!i)throw new Error("unrecognized duration unit in: "+n+" - "+r);e[i]=parseInt(n.replace(t,""))}),e}Object.defineProperty(exports,"__esModule",{value:!0});var _underscore=require("underscore"),_underscore2=_interopRequireDefault(_underscore),unitCodes={ms:"milliseconds",m:"minutes",s:"seconds",h:"hours",d:"days",w:"weeks",mo:"months",y:"years"},isValidDurationValue=function(r){if("string"!=typeof r&&"number"!=typeof r)return!1;if("string"==typeof r&&r.match(/[^\d]/))return!1;var e=parseInt(r,10);return isNaN(e)?!1:!(0>e||e>60)},getDurationFromTag=function(r){var e=findDurationTagInString(r);return e?parseDurationTag(e):void 0},getTagFromDuration=function(r){var e=[];return _underscore2["default"].each(r,function(r,n){e.push(r+_underscore2["default"].invert(unitCodes)[n])}),"<"+e.join(":")+">"},getDisplayString=function(r){var e=[],n=["hours","minutes","seconds"];return _underscore2["default"].each(r,function(r,e){if(!_underscore2["default"].contains(n,e))throw new Error("invalid duration unit")}),r.hours&&e.push(r.hours+"h"),r.minutes&&e.push(r.minutes+"m"),r.seconds&&e.push(r.seconds+"s"),e.join(":")},estimateDurationsFromString=function(r){var e=r.split(" ");e=_underscore2["default"].map(e,function(r){return r.replace(/[\.\,\(\)]/g,"")});var n={seconds:["second","seconds"],minutes:["minute","minutes"],hours:["hour","hours"],days:["day","days"]},t=[];return _underscore2["default"].each(e,function(r,i){if(r.match(/[0-9]+/g)||"a"===r||"an"===r){var u={};_underscore2["default"].each(n,function(n,t){_underscore2["default"].indexOf(n,e[i+1])>-1?u[t]=parseInt(r,10)||1:_underscore2["default"].indexOf(n,e[i+2])>-1?u[t]=parseInt(r,10)||1:_underscore2["default"].indexOf(n,e[i+3])>-1&&(u[t]=parseInt(r,10)||1)}),Object.keys(u).length&&t.push(u)}}),t};exports["default"]={isValidDurationValue:isValidDurationValue,getDurationFromTag:getDurationFromTag,getTagFromDuration:getTagFromDuration,getDisplayString:getDisplayString,estimateDurationsFromString:estimateDurationsFromString};