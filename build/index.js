/*!
 * dzPlayer 0.0.48
 * Author: ShoujieLi
 * Description: A Tiny Video Player for html5.
 * E-Mail: lishoujie08@gmail.com
 * Copyright 2024-2024 ShoujieLi. All Rights Reserved
 * Licensed under MIT (https://rem.mit-license.org/)
 */

function ___$insertStylesToHeader(css) {
  if (!css) {
    return
  }
  if (typeof window === 'undefined') {
    return
  }

  const style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css
}

import Hls from 'hls.js';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function anonymous$1(locals, escapeFn, include, rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
}var __line = 1
  , __lines = "<video\nclass=\"dz-player-video\"\nwebkit-playsinline\nplaysinline\nsrc=\"<%= locals.src %>\"\n<% if(locals.controlOptions && locals.controlOptions.nativeControls){ %> controls <% } %>\n<% if(locals.autoplay){ %> autoplay <% } %>\n<% if(locals.muted){ %> muted <% } %>\n<% if(locals.airplay){ %> airplay <% } %>\n<% if(locals.airplay){ %> x-webkit-airplay=\"allow\" <% } %>\n<% if(locals.preload){ %> preload=\"<%= locals.preload %>\" <% } %>\n<% if(locals.poster){ %> poster=\"<%= locals.poster %>\" <% } %>\n<% if(locals.crossOrigin){ %> crossorigin=\"<%= locals.crossOrigin %>\" <% } %>\n<% if(locals.videoStyle){ %> style=\"<%= locals.videoStyle %>\" <% } %>\n>\n您的浏览器不支持video标签\n</video>\n<div class=\"dz-player-watermark\" style=\"display: none\"></div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s; }
    ; __append("<video\nclass=\"dz-player-video\"\nwebkit-playsinline\nplaysinline\nsrc=\"")
    ; __line = 5
    ; __append(escapeFn( locals.src ))
    ; __append("\"\n")
    ; __line = 6
    ;  if(locals.controlOptions && locals.controlOptions.nativeControls){ 
    ; __append(" controls ")
    ;  } 
    ; __append("\n")
    ; __line = 7
    ;  if(locals.autoplay){ 
    ; __append(" autoplay ")
    ;  } 
    ; __append("\n")
    ; __line = 8
    ;  if(locals.muted){ 
    ; __append(" muted ")
    ;  } 
    ; __append("\n")
    ; __line = 9
    ;  if(locals.airplay){ 
    ; __append(" airplay ")
    ;  } 
    ; __append("\n")
    ; __line = 10
    ;  if(locals.airplay){ 
    ; __append(" x-webkit-airplay=\"allow\" ")
    ;  } 
    ; __append("\n")
    ; __line = 11
    ;  if(locals.preload){ 
    ; __append(" preload=\"")
    ; __append(escapeFn( locals.preload ))
    ; __append("\" ")
    ;  } 
    ; __append("\n")
    ; __line = 12
    ;  if(locals.poster){ 
    ; __append(" poster=\"")
    ; __append(escapeFn( locals.poster ))
    ; __append("\" ")
    ;  } 
    ; __append("\n")
    ; __line = 13
    ;  if(locals.crossOrigin){ 
    ; __append(" crossorigin=\"")
    ; __append(escapeFn( locals.crossOrigin ))
    ; __append("\" ")
    ;  } 
    ; __append("\n")
    ; __line = 14
    ;  if(locals.videoStyle){ 
    ; __append(" style=\"")
    ; __append(escapeFn( locals.videoStyle ))
    ; __append("\" ")
    ;  } 
    ; __append("\n>\n您的浏览器不支持video标签\n</video>\n<div class=\"dz-player-watermark\" style=\"display: none\"></div>")
    ; __line = 18;
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

___$insertStylesToHeader(".dz-player-control-bar input[type='range'] {\n  height: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  cursor: pointer; }\n  .dz-player-control-bar input[type='range']:focus {\n    outline: none; }\n  .dz-player-control-bar input[type='range']::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 4px;\n    box-shadow: 0px 0px 0px #000000;\n    background: #d3d3d3;\n    border-radius: 1px;\n    border: 0px solid #000000; }\n  .dz-player-control-bar input[type='range']::-moz-range-track {\n    width: 100%;\n    height: 4px;\n    box-shadow: 0px 0px 0px #000000;\n    background: #d3d3d3;\n    border-radius: 1px;\n    border: 0px solid #000000; }\n  .dz-player-control-bar input[type='range']::-ms-track {\n    width: 100%;\n    height: 4px;\n    box-shadow: 0px 0px 0px #000000;\n    background: #d3d3d3;\n    border-radius: 1px;\n    border: 0px solid #000000; }\n  .dz-player-control-bar input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    box-shadow: 0px 0px 0px #000000;\n    border: 1px solid #0163a5;\n    height: 12px;\n    width: 12px;\n    border-radius: 20px;\n    margin-top: -4px;\n    background-color: #fff;\n    border: 1px solid transparent;\n    border-image: linear-gradient(#fff, #fff) 0 fill/4 12 4 0/0px 0px 0 3000px; }\n  .dz-player-control-bar input[type='range']::-moz-range-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    box-shadow: 0px 0px 0px #000000;\n    border: 1px solid #0163a5;\n    height: 12px;\n    width: 12px;\n    border-radius: 20px;\n    margin-top: -4px;\n    background-color: #fff;\n    border: 1px solid transparent;\n    border-image: linear-gradient(#fff, #fff) 0 fill/4 12 4 0/0px 0px 0 3000px; }\n  .dz-player-control-bar input[type='range']::-ms-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    box-shadow: 0px 0px 0px #000000;\n    border: 1px solid #0163a5;\n    height: 12px;\n    width: 12px;\n    border-radius: 20px;\n    margin-top: -4px;\n    background-color: #fff;\n    border: 1px solid transparent;\n    border-image: linear-gradient(#fff, #fff) 0 fill/4 12 4 0/0px 0px 0 3000px; }\n  .dz-player-control-bar input[type='range']::-webkit-slider-container {\n    overflow: hidden; }\n\n.dz-player-watermark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  pointer-events: none; }\n\n.dz-player-hide-controller .dz-player-control-panel {\n  display: none; }\n\n.dz-player-control-panel {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  left: 0; }\n  .dz-player-control-panel .dz-player-play-icon,\n  .dz-player-control-panel .dz-player-loading {\n    color: white;\n    cursor: pointer;\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    margin: auto;\n    box-sizing: border-box;\n    display: grid;\n    place-content: center;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n    .dz-player-control-panel .dz-player-play-icon svg,\n    .dz-player-control-panel .dz-player-loading svg {\n      width: 50px;\n      height: 50px; }\n\n@keyframes dz-player-loading-keyframes {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n  .dz-player-control-panel .dz-player-loading {\n    pointer-events: none;\n    background-color: rgba(255, 255, 255, 0.4); }\n    .dz-player-control-panel .dz-player-loading svg {\n      animation: dz-player-loading-keyframes 1s infinite;\n      width: 40px;\n      height: 40px; }\n  .dz-player-control-panel .dz-player-control-bar {\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    user-select: none;\n    transition: all 0.5s ease;\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5));\n    color: white;\n    padding: 0;\n    box-sizing: border-box;\n    display: flex;\n    gap: 0px 8px;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-content: center; }\n    .dz-player-control-panel .dz-player-control-bar .control-bar-progress {\n      position: relative;\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n      align-items: center;\n      align-content: center;\n      margin-bottom: 6px; }\n      .dz-player-control-panel .dz-player-control-bar .control-bar-progress .dz-player-seek-slider {\n        width: 100%;\n        flex: 1; }\n      .dz-player-control-panel .dz-player-control-bar .control-bar-progress .dz-player-play-time-tip {\n        display: none;\n        width: 50px;\n        text-align: center;\n        position: absolute;\n        top: -38px;\n        left: -10px;\n        pointer-events: none;\n        background-color: #000;\n        color: #fff;\n        padding: 5px;\n        border-radius: 4px;\n        font-size: 14px; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-progress .dz-player-play-time-tip::after {\n          content: '';\n          position: absolute;\n          top: 100%;\n          left: 50%;\n          transform: translateX(-50%);\n          border-width: 6px;\n          border-style: solid;\n          border-color: #000 transparent transparent transparent; }\n    .dz-player-control-panel .dz-player-control-bar .control-bar-options {\n      width: 100%;\n      position: relative;\n      display: flex;\n      gap: 8px;\n      justify-content: space-between;\n      align-items: center;\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-content: center;\n      padding: 0px 10px 0px 10px; }\n      .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left {\n        flex: 1;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        align-items: center;\n        align-content: center; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .dz-player-custom-icon {\n          position: relative;\n          display: inline-block;\n          font-size: 12px;\n          height: 20px;\n          margin-right: 15px;\n          text-align: center;\n          color: white;\n          cursor: pointer;\n          display: flex;\n          flex-direction: row;\n          flex-wrap: nowrap;\n          justify-content: center;\n          align-items: center;\n          align-content: center; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .dz-player-custom-icon span {\n            font-size: 12px;\n            margin-left: 5px;\n            display: flex;\n            flex-direction: row;\n            flex-wrap: nowrap;\n            justify-content: center;\n            align-items: center;\n            align-content: center; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .control-play {\n          width: 20px;\n          height: 20px;\n          margin-right: 10px;\n          cursor: pointer; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .control-play svg {\n            width: 100%;\n            height: 100%; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .control-flush {\n          width: 20px;\n          height: 20px;\n          margin-right: 10px;\n          transition: all .3s;\n          -webkit-transition: all .3s;\n          cursor: pointer; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .control-flush svg {\n            width: 100%;\n            height: 100%; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .control-flush:hover {\n            transform: rotate(180deg);\n            -webkit-transform: rotate(180deg); }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .live-text {\n          white-space: nowrap;\n          -webkit-box-align: center;\n          -webkit-align-items: center;\n          -ms-flex-align: center;\n          align-items: center;\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          display: flex;\n          margin: 0;\n          padding: 0px;\n          scale: .8;\n          color: #fff;\n          font-size: 16px; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .live-text img {\n            width: 14px;\n            height: 14px; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-left .dz-player-play-time {\n          font-family: Menlo, Courier New, Consolas, Lucida Console, Courier, monospace;\n          font-size: 14px;\n          text-align: center;\n          user-select: none;\n          min-width: 120px; }\n      .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: flex-end;\n        align-items: center;\n        align-content: center; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-custom-icon {\n          position: relative;\n          display: inline-block;\n          font-size: 12px;\n          height: 20px;\n          margin-right: 15px;\n          text-align: center;\n          color: white;\n          cursor: pointer;\n          display: flex;\n          flex-direction: row;\n          flex-wrap: nowrap;\n          justify-content: center;\n          align-items: center;\n          align-content: center; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-custom-icon span {\n            font-size: 12px;\n            margin-left: 5px;\n            display: flex;\n            flex-direction: row;\n            flex-wrap: nowrap;\n            justify-content: center;\n            align-items: center;\n            align-content: center; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-playbackRatio {\n          position: relative;\n          display: inline-block;\n          font-size: 12px;\n          height: 20px;\n          margin-right: 15px;\n          text-align: center;\n          color: white;\n          cursor: pointer;\n          display: flex;\n          flex-direction: row;\n          flex-wrap: nowrap;\n          justify-content: center;\n          align-items: center;\n          align-content: center; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-playbackRatio_over {\n            display: none;\n            width: 100%;\n            position: absolute;\n            height: 50px;\n            background: transparent;\n            bottom: 0;\n            left: 0; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-playbackRatio-text {\n            font-size: 12px;\n            display: flex;\n            flex-direction: row;\n            flex-wrap: nowrap;\n            justify-content: center;\n            align-items: center;\n            align-content: center; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-playbackRatio .playbackRatio-box {\n            display: none;\n            position: absolute;\n            bottom: 40px;\n            width: 60px;\n            max-width: 60px;\n            background: #33343f;\n            padding: 20px 0;\n            right: 50%;\n            transform: translate(50%);\n            height: auto;\n            color: #fff;\n            border-radius: 12px !important; }\n            .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-playbackRatio .playbackRatio-box__wrap {\n              color: #fff;\n              font-size: 12px;\n              font-weight: 500;\n              line-height: 14px; }\n              .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-playbackRatio .playbackRatio-box__wrap-item {\n                width: 100%;\n                text-align: center;\n                opacity: 0.7;\n                cursor: pointer;\n                margin-bottom: 16px;\n                line-height: 18px; }\n                .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-playbackRatio .playbackRatio-box__wrap-item:last-child {\n                  margin-bottom: 0; }\n                .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-playbackRatio .playbackRatio-box__wrap-item:hover {\n                  opacity: 1;\n                  color: #fe2c55;\n                  font-weight: 500; }\n                .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-playbackRatio .playbackRatio-box__wrap-item.select {\n                  opacity: 1;\n                  color: #fe2c55;\n                  font-weight: 500; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-videoList {\n          position: relative;\n          display: inline-block;\n          font-size: 12px;\n          height: 20px;\n          margin-right: 15px;\n          text-align: center;\n          color: white;\n          cursor: pointer;\n          display: flex;\n          flex-direction: row;\n          flex-wrap: nowrap;\n          justify-content: center;\n          align-items: center;\n          align-content: center; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-videoList_over {\n            width: 100%;\n            display: none;\n            position: absolute;\n            height: 50px;\n            background: transparent;\n            bottom: 0;\n            left: 0; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-videoList-text {\n            font-size: 12px;\n            display: flex;\n            flex-direction: row;\n            flex-wrap: nowrap;\n            justify-content: center;\n            align-items: center;\n            align-content: center; }\n          .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-videoList .videoList-box {\n            display: none;\n            position: absolute;\n            bottom: 40px;\n            width: 60px;\n            max-width: 60px;\n            background: #33343f;\n            padding: 20px 0;\n            right: 50%;\n            transform: translate(50%);\n            height: auto;\n            color: #fff;\n            border-radius: 12px !important; }\n            .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-videoList .videoList-box__wrap {\n              color: #fff;\n              font-size: 12px;\n              font-weight: 500;\n              line-height: 14px; }\n              .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-videoList .videoList-box__wrap-item {\n                width: 100%;\n                text-align: center;\n                opacity: 0.7;\n                cursor: pointer;\n                margin-bottom: 16px;\n                line-height: 18px; }\n                .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-videoList .videoList-box__wrap-item:last-child {\n                  margin-bottom: 0; }\n                .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-videoList .videoList-box__wrap-item:hover {\n                  opacity: 1;\n                  color: #fe2c55;\n                  font-weight: 500; }\n                .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-videoList .videoList-box__wrap-item.select {\n                  opacity: 1;\n                  color: #fe2c55;\n                  font-weight: 500; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right input.dz-player-volume-slider {\n          width: 0px;\n          transition: all 0.5s ease; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-volume-bar {\n          margin-right: 15px;\n          max-width: 80px;\n          display: flex;\n          justify-content: space-between;\n          align-items: center; }\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-volume-icon,\n        .dz-player-control-panel .dz-player-control-bar .control-bar-options .control-bar-right .dz-player-fullscreen {\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          text-align: center;\n          color: white;\n          cursor: pointer; }\n\n.dz-player-container {\n  position: relative;\n  overflow: hidden;\n  background-color: #000;\n  font-size: 12px !important; }\n  .dz-player-container .dz-player-video {\n    width: 100%;\n    height: 100%;\n    transform: translate(0px, 0px); }\n");

var play = "<svg viewBox=\"0 0 56 56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M44.14 11.437a23.03 23.03 0 00-16.352-6.77 23.025 23.025 0 00-16.347 6.77 22.992 22.992 0 00-4.956 7.352 22.963 22.963 0 00-1.818 9c0 3.122.61 6.152 1.818 9.004a22.976 22.976 0 004.956 7.348 22.996 22.996 0 007.348 4.955 22.963 22.963 0 009 1.819 22.96 22.96 0 009.004-1.819 23.037 23.037 0 007.348-4.955 22.976 22.976 0 004.955-7.348 22.967 22.967 0 001.819-9.004c0-3.119-.611-6.148-1.819-9a22.992 22.992 0 00-4.955-7.352z\" stroke-opacity=\".6\" stroke=\"#FFF\" fill=\"#1B2337\" opacity=\".6\"/><path d=\"M23.524 37.109a1.68 1.68 0 01-1.684 0 1.683 1.683 0 01-.84-1.456V20.349c0-.6.32-1.158.84-1.456a1.68 1.68 0 011.684 0l13.251 7.65a1.684 1.684 0 010 2.914L23.524 37.11z\" fill=\"#FFF\"/></g></svg>";

var pause = "<svg viewBox=\"0 0 56 56\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M49.498 18.917a23.2 23.2 0 00-5-7.419 23.238 23.238 0 00-16.5-6.832 23.234 23.234 0 00-16.496 6.832 23.2 23.2 0 00-5 7.419 23.17 23.17 0 00-1.835 9.081c0 3.15.616 6.208 1.835 9.085a23.184 23.184 0 005 7.415 23.204 23.204 0 007.415 5 23.17 23.17 0 009.081 1.835c3.15 0 6.208-.616 9.085-1.835a23.245 23.245 0 007.415-5 23.184 23.184 0 005-7.415 23.175 23.175 0 001.835-9.085 23.17 23.17 0 00-1.835-9.081\" stroke-opacity=\".6\" stroke=\"#FFF\" fill=\"#1B2337\" opacity=\".6\"/><path d=\"M21.467 37.333V18.667h4.2v18.666h-4.2zm13.066-18.666v18.666h-4.2V18.667h4.2z\" fill=\"#FFF\"/></g></svg>";

var volumeUp = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16zm4.576 0q0 2.72-1.536 5.056t-4 3.36q-.256.096-.448.096-.48 0-.832-.352t-.32-.8q0-.704.672-1.056 1.024-.512 1.376-.8 1.312-.96 2.048-2.4T22.848 16t-.736-3.104-2.048-2.4q-.352-.288-1.376-.8-.672-.352-.672-1.056 0-.448.32-.8t.8-.352q.224 0 .48.096 2.496 1.056 4 3.36T25.152 16z\"/></svg>";

var volumeDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16z\"/></svg>";

var volumeOff = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8z\"/></svg>";

var full = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 33\" fill=\"white\"><path d=\"M6.667 28H1.334c-.8 0-1.333-.533-1.333-1.333v-5.333c0-.8.533-1.333 1.333-1.333s1.333.533 1.333 1.333v4h4c.8 0 1.333.533 1.333 1.333S7.467 28 6.667 28zm24 0h-5.333c-.8 0-1.333-.533-1.333-1.333s.533-1.333 1.333-1.333h4v-4c0-.8.533-1.333 1.333-1.333S32 20.534 32 21.334v5.333c0 .8-.533 1.333-1.333 1.333zm0-16c-.8 0-1.333-.533-1.333-1.333v-4h-4c-.8 0-1.333-.533-1.333-1.333s.533-1.333 1.333-1.333h5.333c.8 0 1.333.533 1.333 1.333v5.333c0 .8-.533 1.333-1.333 1.333zM1.333 12C.533 12 0 11.467 0 10.667V5.334c0-.8.533-1.333 1.333-1.333h5.333c.8 0 1.333.533 1.333 1.333s-.533 1.333-1.333 1.333h-4v4c0 .8-.533 1.333-1.333 1.333z\"/></svg>";

var fullWeb = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 33\" fill=\"white\"><path d=\"M24.965 24.38H6.833a2.482 2.482 0 01-2.478-2.478V10.096a2.482 2.482 0 012.478-2.478h18.132a2.482 2.482 0 012.478 2.478v11.806a2.481 2.481 0 01-2.478 2.478zM6.833 10.097v11.806h18.134l-.002-11.806H6.833zM2.478 28.928H8.43a1.238 1.238 0 100-2.477H2.478v-5.802a1.239 1.239 0 10-2.477 0v5.802a2.481 2.481 0 002.478 2.478zm28.283-9.516c-.684 0-1.238.554-1.238 1.238v5.801h-5.951a1.237 1.237 0 100 2.477h5.951a2.48 2.48 0 002.478-2.478v-5.801c0-.683-.554-1.238-1.239-1.238zM0 5.55v5.802a1.238 1.238 0 002.476 0V5.55h5.952a1.238 1.238 0 100-2.476H2.477A2.48 2.48 0 00-.001 5.55zm32 5.8V5.549a2.48 2.48 0 00-2.478-2.478h-5.951a1.237 1.237 0 100 2.476h5.951v5.801c0 .683.554 1.237 1.238 1.237a1.235 1.235 0 001.239-1.236z\"/></svg>";

var setting = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 28\" fill=\"white\"><path d=\"M28.633 17.104c.035.21.026.463-.026.76s-.14.598-.262.904c-.122.306-.271.581-.445.825s-.367.419-.576.524c-.209.105-.393.157-.55.157s-.332-.035-.524-.105c-.175-.052-.393-.1-.655-.144s-.528-.052-.799-.026-.541.083-.812.17-.502.236-.694.445c-.419.437-.664.934-.734 1.493s.009 1.092.236 1.598c.175.349.148.699-.079 1.048-.105.14-.271.284-.498.432s-.476.284-.747.406-.555.218-.851.288c-.297.07-.559.105-.786.105-.157 0-.306-.061-.445-.183s-.236-.253-.288-.393h-.026c-.192-.541-.52-1.009-.982-1.402s-1-.589-1.611-.589c-.594 0-1.131.197-1.611.589s-.816.851-1.009 1.375c-.087.21-.218.362-.393.458s-.367.144-.576.144c-.244 0-.52-.044-.825-.131s-.611-.197-.917-.327c-.306-.131-.581-.284-.825-.458s-.428-.349-.55-.524c-.087-.122-.135-.266-.144-.432s.057-.397.197-.694c.192-.402.266-.86.223-1.375s-.266-.991-.668-1.428c-.244-.262-.541-.432-.891-.511s-.681-.109-.995-.092a4.358 4.358 0 00-1.127.21c-.244.07-.489.052-.734-.052-.192-.07-.371-.231-.537-.485a5.48 5.48 0 01-.746-1.781c-.07-.323-.087-.59-.052-.799.052-.384.227-.629.524-.734.524-.21.995-.555 1.415-1.035s.629-1.017.629-1.611c0-.611-.21-1.144-.629-1.598s-.891-.786-1.415-.996c-.157-.052-.288-.179-.393-.38s-.157-.406-.157-.616c0-.227.035-.48.105-.76s.162-.55.275-.812.244-.502.393-.72c.148-.218.31-.38.485-.485.14-.087.275-.122.406-.105s.275.052.432.105c.524.21 1.07.275 1.637.197s1.07-.327 1.506-.747c.21-.209.362-.467.458-.773s.157-.607.183-.904c.026-.297.026-.568 0-.812s-.048-.419-.065-.524c-.035-.105-.066-.227-.092-.367s-.013-.262.039-.367c.105-.244.293-.458.563-.642s.563-.336.878-.458c.314-.122.62-.214.917-.275s.533-.092.707-.092c.227 0 .406.074.537.223s.223.301.275.458c.192.471.507.886.943 1.244s.952.537 1.546.537c.611 0 1.153-.17 1.624-.511s.803-.773.996-1.297c.07-.14.179-.284.327-.432s.301-.223.458-.223c.244 0 .511.035.799.105s.572.166.851.288c.279.122.537.279.773.472s.423.402.563.629c.087.14.113.293.079.458s-.07.284-.105.354c-.227.506-.297 1.039-.21 1.598s.341 1.048.76 1.467c.419.419.934.651 1.546.694s1.179-.057 1.703-.301c.14-.087.31-.122.511-.105s.371.096.511.236c.262.244.493.616.694 1.113s.336 1 .406 1.506c.035.297-.013.528-.144.694s-.266.275-.406.327c-.542.192-1.004.528-1.388 1.009s-.576 1.026-.576 1.637c0 .594.162 1.113.485 1.559s.747.764 1.27.956c.122.07.227.14.314.21.192.157.323.358.393.602zm-12.182 2.358c.786 0 1.528-.149 2.227-.445s1.305-.707 1.821-1.231c.515-.524.921-1.131 1.218-1.821s.445-1.428.445-2.214-.148-1.524-.445-2.214-.703-1.292-1.218-1.808c-.515-.515-1.122-.921-1.821-1.218s-1.441-.445-2.227-.445c-.786 0-1.524.148-2.214.445s-1.292.703-1.808 1.218c-.515.515-.921 1.118-1.218 1.808s-.445 1.428-.445 2.214.149 1.524.445 2.214.703 1.297 1.218 1.821 1.118.934 1.808 1.231 1.428.445 2.214.445z\"/></svg>";

var right = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M22 16L11.895 5.4 10 7.387 18.211 16 10 24.612l1.895 1.988 8.211-8.613z\"/></svg>";

var camera = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" fill=\"white\"><path d=\"M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm11 15H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h3a1 1 0 010 2H5c-.551 0-1 .449-1 1v16c0 .552.449 1 1 1h22a1 1 0 001-1V9c0-.551-.448-1-1-1H16a1 1 0 010-2h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zm-3-17.5a1.5 1.5 0 103.001-.001A1.5 1.5 0 0024 10.5zM15 4a1 1 0 01-1 1h-4a1 1 0 010-2h4a1 1 0 011 1z\"/></svg>";

var airplay = "<svg viewBox=\"0 0 288 288\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"white\"><path d=\"M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z\"/></svg>";

var loading = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z\"/></svg>";

var controlPlay = "<svg t=\"1702888019089\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3681\" width=\"64\" height=\"64\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M137.830811 984.042017C112.737067 958.344279 99.771199 923.714631 102.020176 888.407991V135.641658c-2.249977-35.31264 10.715891-69.947288 35.807635-95.655025C162.917556 14.279895 197.889199-0.197958 234.407827 0.00204c27.409721 0.352996 54.295447 7.328925 78.219204 20.294793l530.544596 381.456115c45.646535 20.050796 75.955226 63.074358 78.589199 111.562864-2.265977 47.215519-31.599678 89.239091-75.987226 108.858891l-533.023571 381.638113c-23.977756 12.926868-50.903482 19.859798-78.342202 20.174794-36.513628 0.215998-71.484272-14.247855-96.577016-39.945593z\" fill=\"#ffffff\" p-id=\"3682\"></path></svg>\n";

var controlPause = "<svg t=\"1702887843517\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1493\" width=\"64\" height=\"64\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M705.88416 61.44H782.336a81.92 81.92 0 0 1 81.92 81.92v737.28a81.92 81.92 0 0 1-81.92 81.92h-76.45184a81.92 81.92 0 0 1-81.92-81.92V143.36a81.92 81.92 0 0 1 81.92-81.92zM225.28 61.44h76.45184a81.92 81.92 0 0 1 81.92 81.92v737.28a81.92 81.92 0 0 1-81.92 81.92H225.28a81.92 81.92 0 0 1-81.92-81.92V143.36a81.92 81.92 0 0 1 81.92-81.92z\" p-id=\"1494\" fill=\"#ffffff\"></path></svg>\n";

var controlFlush = "<svg t=\"1702890958912\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4679\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"64\" height=\"64\"><path d=\"M586.511059 279.130353a48.188235 48.188235 0 1 0 21.684706 93.906823l192.752941-44.574117a48.188235 48.188235 0 0 0 35.358118-60.837647l-57.344-190.042353a48.188235 48.188235 0 0 0-92.280471 27.828706l16.263529 53.970823a384.602353 384.602353 0 1 0 174.08 473.027765 54.211765 54.211765 0 0 0-101.376-38.430118 276.178824 276.178824 0 1 1-112.941176-332.619294l0.240941 0.120471-76.438588 17.648941z\" fill=\"#ffffff\" p-id=\"4680\"></path></svg>\n";

var Icons = {
    play: play,
    pause: pause,
    controlPlay: controlPlay,
    controlPause: controlPause,
    controlFlush: controlFlush,
    volumeUp: volumeUp,
    volumeDown: volumeDown,
    volumeOff: volumeOff,
    full: full,
    fullWeb: fullWeb,
    setting: setting,
    right: right,
    camera: camera,
    loading: loading,
    airplay: airplay,
};

function anonymous(locals, escapeFn, include, rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
}var __line = 1
  , __lines = "<% if(locals.showControl){ %>\n<% if(locals.bigPlayControl){ %>\n<div class=\"dz-player-play-icon\"></div>\n<% } %>\n<div\nclass=\"dz-player-control-bar\"\ndata-type=\"<%= locals.srcType %>\"\n<% if(locals.controlStyle){ %> style=\"<%= locals.controlStyle %>\" <% } %>\n>\n<% if(locals.srcType != \"hls\"){ %>\n<div class=\"control-bar-progress\">\n<input type=\"range\" class=\"dz-player-seek-slider\" min=\"0\" max=\"100\" step=\"any\" value=\"0\" />\n<span class=\"dz-player-play-time-tip\">0.0</span>\n</div>\n<% } %>\n<div class=\"control-bar-options\">\n<div class=\"control-bar-left\">\n<div class=\"control-play\"></div>\n<% if(locals.srcType == \"hls\"){ %>\n<% if(locals.flushControl){ %>\n<div alt=\"刷新\" class=\"control-flush\"></div>\n<% } %>\n<div class=\"live-text\" style=\"display: none;\">LIVE</div>\n<% } else { %>\n<% if(locals.playTime){ %>\n<span class=\"dz-player-play-time\">00:00 / 00:00</span>\n<% } %>\n<% } %>\n</div>\n<div class=\"control-bar-right\">\n<% if(locals.videoList){ %>\n<div class=\"dz-player-videoList\">\n<div class=\"dz-player-videoList_over\"></div>\n<div class=\"dz-player-videoList-text\">清晰度</div>\n<div class=\"videoList-box\">\n<div class=\"videoList-box__wrap\">\n<% locals.videoList.forEach(function(video){ %>\n<div class=\"videoList-box__wrap-item <% if(video.default){ %>select <% } %>\"><%- video.label; %></div>\n<% }); %>\n</div>\n</div>\n</div>\n<% } %>\n<% if(locals.ratios){ %>\n<div class=\"dz-player-playbackRatio\">\n<div class=\"dz-player-playbackRatio_over\"></div>\n<div class=\"dz-player-playbackRatio-text\">倍速</div>\n<div class=\"playbackRatio-box\">\n<div class=\"playbackRatio-box__wrap\">\n<% locals.ratios.forEach(function(ratio){ %>\n<div class=\"playbackRatio-box__wrap-item\" data-ratio=\"<%- ratio.value; %>\"><%- ratio.label; %></div>\n<% }); %>\n</div>\n</div>\n</div>\n<% } %>\n<!-- 音量控制 -->\n<% if(locals.volumeControl){ %>\n<div class=\"dz-player-volume-bar\">\n<i class=\"dz-player-volume-icon\"></i>\n<input type=\"range\" class=\"dz-player-volume-slider\" min=\"0\" max=\"1\" step=\"0.01\" value=\"<%= locals.volume %>\" />\n</div>\n<% } %>\n<% if(locals.fullScreenControl){ %>\n<i class=\"dz-player-fullscreen\"></i>\n<% } %>\n</div>\n</div>\n</div>\n<% } %>\n<div class=\"dz-player-loading\"></div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s; }
    ;  if(locals.showControl){ 
    ; __append("\n")
    ; __line = 2
    ;  if(locals.bigPlayControl){ 
    ; __append("\n<div class=\"dz-player-play-icon\"></div>\n")
    ; __line = 4
    ;  } 
    ; __append("\n<div\nclass=\"dz-player-control-bar\"\ndata-type=\"")
    ; __line = 7
    ; __append(escapeFn( locals.srcType ))
    ; __append("\"\n")
    ; __line = 8
    ;  if(locals.controlStyle){ 
    ; __append(" style=\"")
    ; __append(escapeFn( locals.controlStyle ))
    ; __append("\" ")
    ;  } 
    ; __append("\n>\n")
    ; __line = 10
    ;  if(locals.srcType != "hls"){ 
    ; __append("\n<div class=\"control-bar-progress\">\n<input type=\"range\" class=\"dz-player-seek-slider\" min=\"0\" max=\"100\" step=\"any\" value=\"0\" />\n<span class=\"dz-player-play-time-tip\">0.0</span>\n</div>\n")
    ; __line = 15
    ;  } 
    ; __append("\n<div class=\"control-bar-options\">\n<div class=\"control-bar-left\">\n<div class=\"control-play\"></div>\n")
    ; __line = 19
    ;  if(locals.srcType == "hls"){ 
    ; __append("\n")
    ; __line = 20
    ;  if(locals.flushControl){ 
    ; __append("\n<div alt=\"刷新\" class=\"control-flush\"></div>\n")
    ; __line = 22
    ;  } 
    ; __append("\n<div class=\"live-text\" style=\"display: none;\">LIVE</div>\n")
    ; __line = 24
    ;  } else { 
    ; __append("\n")
    ; __line = 25
    ;  if(locals.playTime){ 
    ; __append("\n<span class=\"dz-player-play-time\">00:00 / 00:00</span>\n")
    ; __line = 27
    ;  } 
    ; __append("\n")
    ; __line = 28
    ;  } 
    ; __append("\n</div>\n<div class=\"control-bar-right\">\n")
    ; __line = 31
    ;  if(locals.videoList){ 
    ; __append("\n<div class=\"dz-player-videoList\">\n<div class=\"dz-player-videoList_over\"></div>\n<div class=\"dz-player-videoList-text\">清晰度</div>\n<div class=\"videoList-box\">\n<div class=\"videoList-box__wrap\">\n")
    ; __line = 37
    ;  locals.videoList.forEach(function(video){ 
    ; __append("\n<div class=\"videoList-box__wrap-item ")
    ; __line = 38
    ;  if(video.default){ 
    ; __append("select ")
    ;  } 
    ; __append("\">")
    ; __append( video.label )
    ; __append("</div>\n")
    ; __line = 39
    ;  }); 
    ; __append("\n</div>\n</div>\n</div>\n")
    ; __line = 43
    ;  } 
    ; __append("\n")
    ; __line = 44
    ;  if(locals.ratios){ 
    ; __append("\n<div class=\"dz-player-playbackRatio\">\n<div class=\"dz-player-playbackRatio_over\"></div>\n<div class=\"dz-player-playbackRatio-text\">倍速</div>\n<div class=\"playbackRatio-box\">\n<div class=\"playbackRatio-box__wrap\">\n")
    ; __line = 50
    ;  locals.ratios.forEach(function(ratio){ 
    ; __append("\n<div class=\"playbackRatio-box__wrap-item\" data-ratio=\"")
    ; __line = 51
    ; __append( ratio.value )
    ; __append("\">")
    ; __append( ratio.label )
    ; __append("</div>\n")
    ; __line = 52
    ;  }); 
    ; __append("\n</div>\n</div>\n</div>\n")
    ; __line = 56
    ;  } 
    ; __append("\n<!-- 音量控制 -->\n")
    ; __line = 58
    ;  if(locals.volumeControl){ 
    ; __append("\n<div class=\"dz-player-volume-bar\">\n<i class=\"dz-player-volume-icon\"></i>\n<input type=\"range\" class=\"dz-player-volume-slider\" min=\"0\" max=\"1\" step=\"0.01\" value=\"")
    ; __line = 61
    ; __append(escapeFn( locals.volume ))
    ; __append("\" />\n</div>\n")
    ; __line = 63
    ;  } 
    ; __append("\n")
    ; __line = 64
    ;  if(locals.fullScreenControl){ 
    ; __append("\n<i class=\"dz-player-fullscreen\"></i>\n")
    ; __line = 66
    ;  } 
    ; __append("\n</div>\n</div>\n</div>\n")
    ; __line = 70
    ;  } 
    ; __append("\n<div class=\"dz-player-loading\"></div>")
    ; __line = 71;
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

// 节流
var throttle = function (fn, delay) {
    var timer = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer) {
            return;
        }
        timer = setTimeout(function () {
            fn.apply(void 0, args);
            timer = null;
        }, delay);
    };
};
// 格式化时间为 00:00 toFixed有值时 则格式化为00:00.x
var formatTime = function (secondTime, fractionDigits) {
    var baseFractionDigits = Math.pow(10, fractionDigits !== null && fractionDigits !== void 0 ? fractionDigits : 0);
    if (secondTime < 59.9) {
        return "".concat(secondTime.toFixed(1), "s");
    }
    var m = Math.floor(secondTime / 60);
    var s = Math.floor((secondTime % 60) * baseFractionDigits) / baseFractionDigits;
    return "".concat(m, ":").concat(s < 10 ? "0".concat(s) : s);
};
// 是否是移动端
var isMobile = /mobile/i.test(window.navigator.userAgent);
// 解析秒到时间字符串 00:00 or 00:00:00
var secondToTime = function (second) {
    second = second || 0;
    if (second === 0 || second === Infinity || second.toString() === 'NaN') {
        return '00:00';
    }
    var add0 = function (num) { return (num < 10 ? '0' + num : '' + num); };
    var hour = Math.floor(second / 3600);
    var min = Math.floor((second - hour * 3600) / 60);
    var sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
};
// 获取视频宽高，视频的真实宽高不一定等于容器的宽高，需要通过公式计算出来
var getVideoInfo = function (videoElem) {
    var videoRatio = videoElem.videoWidth / videoElem.videoHeight;
    var width = videoElem.offsetWidth;
    var height = videoElem.offsetHeight;
    var elementRatio = width / height;
    if (elementRatio > videoRatio)
        width = height * videoRatio;
    else
        height = width / videoRatio;
    return {
        width: width,
        height: height
    };
};
var downloadBase64 = function (fileName, content) {
    var aLink = document.createElement("a");
    var blob = base64ToBlob(content); //new Blob([content]);
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);
    // aLink.dispatchEvent(evt);
    aLink.click();
};
var base64ToBlob = function (code) {
    var parts = code.split(";base64,");
    var contentType = parts[0].split(":")[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
};
//判断是否是字符串
var isString = function (o) {
    return typeof o === 'string';
};
var isArray = function (o) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(o);
    }
    else {
        return Object.prototype.toString.call(o) === '[object Array]';
    }
};

var ToolBar = /** @class */ (function () {
    function ToolBar(player) {
        var _this = this;
        this.initToolBar = function () {
            Object.keys(_this.toolBarOptions).forEach(function (key) {
                _this.createElement(key, _this.toolBarOptions[key]);
            });
        };
        this.createElement = function (key, toolBar) {
            _this.mountTarget = _this.player.videoContainer.querySelector(".control-bar-right");
            if (toolBar.position && toolBar.position == "left") {
                _this.mountTarget = _this.player.videoContainer.querySelector(".control-bar-left");
            }
            _this.iconElement = document.createElement('div');
            _this.iconElement.setAttribute("title", toolBar.title);
            _this.iconElement.className = "dz-player-custom-icon ".concat(key, " ").concat(toolBar.icon);
            if (toolBar.style) {
                _this.iconElement.setAttribute("style", toolBar.style);
            }
            if (toolBar.text) {
                _this.iconElement.innerHTML = "<span>".concat(toolBar.text, "</span>");
            }
            _this.mountTarget.appendChild(_this.iconElement);
            // 将newChild插入到parentElement的子节点列表的开头
            if (toolBar.position && toolBar.position == "left") {
                _this.mountTarget.appendChild(_this.iconElement);
            }
            else {
                _this.mountTarget.insertBefore(_this.iconElement, _this.mountTarget.firstChild);
            }
            _this.iconElement.addEventListener("click", function () {
                toolBar.click && toolBar.click(_this.player);
            });
        };
        this.player = player;
        this.toolBarOptions = player.options.toolBars || {};
        this.initToolBar();
    }
    return ToolBar;
}());

var Controller = /** @class */ (function () {
    function Controller(player) {
        var _this = this;
        this.disableAutoHide = false; // 禁用自动隐藏
        this.playRaf = 0; // 播放 requestAnimationFrame Id
        // 初始化播放器控制条
        this.initControls = function () {
            var _a;
            // 控制面板节点
            _this.controlElement = document.createElement('div');
            _this.controlElement.className = 'dz-player-control-panel';
            _this.controlElement.innerHTML = anonymous(__assign(__assign({}, (_this.player.options.controlOptions || {})), { volume: _this.player.options.volume, srcType: _this.player.videoType, ratios: ((_a = _this.player.options.speedList) === null || _a === void 0 ? void 0 : _a.length) ? _this.player.options.speedList : null, showControl: _this.player.controls, videoList: isString(_this.player.options.url) ? null : _this.player.options.url }));
            // 将控制面板添加到目标容器中
            !_this.controlOptions.manualMount && !_this.controlOptions.nativeControls && _this.mountTarget.appendChild(_this.controlElement);
            // loading 动画
            _this.loading = _this.controlElement.querySelector('.dz-player-loading');
            if (_this.loading) {
                _this.loading.innerHTML = Icons.loading;
                _this.loading.style.opacity = '0';
            }
            _this.bottomControlBar = _this.controlElement.querySelector('.dz-player-control-bar');
            if (_this.bottomControlBar) {
                _this.bottomControlBar.addEventListener('mousedown', function (event) { return event.stopPropagation(); });
            }
            _this.initPlayButton();
            _this.initControlPlayOrPauseButton();
            _this.initControlFlushButton();
            _this.initSeekBar();
            _this.initVolumeButton();
            _this.initFullScreenButton();
            _this.initPlaybackRate();
            _this.initPlayVideoList();
            // 其他
            // if (!this.player.options.controlOptions) {}
        };
        // 初始化播放按钮
        this.initPlayButton = function () {
            // 设置控制条按钮的事件处理函数
            _this.playButton = _this.controlElement.querySelector('.dz-player-play-icon');
            if (!_this.playButton)
                return;
            _this.playButton.innerHTML = Icons.play;
            _this.playButton.addEventListener('click', _this.player.togglePlay);
        };
        this.initControlPlayOrPauseButton = function () {
            // 设置控制条全屏按钮的事件处理函数
            _this.controlPlayButton = _this.controlElement.querySelector('.control-play');
            if (!_this.controlPlayButton)
                return;
            _this.controlPlayButton.addEventListener('click', _this.player.togglePlay);
            _this.controlPlayButton.innerHTML = Icons.controlPlay;
        };
        this.initControlFlushButton = function () {
            _this.controlFlushButton = _this.controlElement.querySelector('.control-flush');
            if (!_this.controlFlushButton)
                return;
            _this.controlFlushButton.addEventListener('click', function () {
                var that = _this;
                //重新加载url
                that.player.pause();
                that.player.video.currentTime = that.player.video.duration;
                that.player.play();
            });
            _this.controlFlushButton.innerHTML = Icons.controlFlush;
        };
        // 初始化播放进度条
        this.initSeekBar = function () {
            // 设置控制条滑块的事件处理函数
            _this.seekBar = _this.controlElement.querySelector('.dz-player-seek-slider');
            if (!_this.seekBar)
                return;
            var playStatus = false;
            // 记录当前播放状态，并暂停播放
            var pausePlay = function (event) {
                event.stopPropagation();
                // 记录当前播放状态
                playStatus = !_this.player.video.paused;
                // 先暂停播放
                _this.player.pause();
            };
            // 恢复播放状态
            var resumePlay = function (event) {
                event.stopPropagation();
                // 恢复播放状态
                playStatus && _this.player.play();
            };
            _this.playTime = _this.controlElement.querySelector('.dz-player-play-time');
            _this.seekBar && _this.seekBar.addEventListener('mousedown', pausePlay);
            _this.seekBar && _this.seekBar.addEventListener('mouseup', resumePlay);
            _this.seekBar && _this.seekBar.addEventListener('touchstart', pausePlay);
            _this.seekBar && _this.seekBar.addEventListener('touchend', resumePlay);
            _this.seekBar && _this.seekBar.addEventListener('touchmove', function (event) { return event.stopPropagation(); });
            _this.seekBar && _this.seekBar.addEventListener('input', _this.onSeeking);
        };
        // 初始化视频播放速率
        this.initPlaybackRate = function () {
            var _a, _b, _c, _d, _e;
            _this.player.video.playbackRate = _this.player.options.playbackRate || 1;
            if (!((_a = _this.player.options.speedList) === null || _a === void 0 ? void 0 : _a.length)) {
                return;
            }
            _this.playBackRatio = _this.controlElement.querySelector('.dz-player-playbackRatio');
            if (!_this.playBackRatio) {
                return;
            }
            var tmpPlayBackRatioBox = (_b = _this.playBackRatio) === null || _b === void 0 ? void 0 : _b.querySelector(".playbackRatio-box");
            var tmpPlayBackRatioOver = (_c = _this.playBackRatio) === null || _c === void 0 ? void 0 : _c.querySelector(".dz-player-playbackRatio_over");
            (_d = _this.playBackRatio) === null || _d === void 0 ? void 0 : _d.addEventListener("mouseenter", function () {
                tmpPlayBackRatioBox.style.display = 'block';
                tmpPlayBackRatioOver.style.display = "block";
                tmpPlayBackRatioBox.addEventListener("mouseleave", function () {
                    tmpPlayBackRatioBox.style.display = "none";
                    tmpPlayBackRatioOver.style.display = "none";
                });
            });
            _this.playBackRatio.addEventListener("mouseleave", function () {
                tmpPlayBackRatioBox.style.display = "none";
                tmpPlayBackRatioOver.style.display = "none";
            });
            _this.playBackRatioItem = _this.controlElement.querySelectorAll(".playbackRatio-box__wrap-item");
            if (!_this.playBackRatioItem) {
                return;
            }
            var _loop_1 = function (i) {
                _this.playBackRatioItem[i].addEventListener("click", function () {
                    var _a, _b, _c;
                    (_b = (_a = _this.playBackRatio) === null || _a === void 0 ? void 0 : _a.querySelector(".select")) === null || _b === void 0 ? void 0 : _b.classList.remove("select");
                    if (_this.playBackRatioItem) {
                        _this.playBackRatioItem[i].classList.add("select");
                        if (_this.player.options.speedList && _this.player.options.speedList[i]) {
                            _this.player.video.playbackRate = _this.player.options.speedList[i].value;
                        }
                        ((_c = _this.playBackRatio) === null || _c === void 0 ? void 0 : _c.querySelector(".dz-player-playbackRatio-text")).textContent = _this.playBackRatioItem[i].innerText;
                    }
                });
            };
            for (var i = 0; i < ((_e = _this.player.options.speedList) === null || _e === void 0 ? void 0 : _e.length); i++) {
                _loop_1(i);
            }
        };
        //初始化视频清晰度列表
        this.initPlayVideoList = function () {
            var _a, _b, _c, _d, _e;
            if (!isArray(_this.player.options.url)) {
                return;
            }
            _this.playVideoList = _this.controlElement.querySelector('.dz-player-videoList');
            if (!_this.playVideoList)
                return;
            var playVideoListBox = (_a = _this.playVideoList) === null || _a === void 0 ? void 0 : _a.querySelector(".videoList-box");
            var playVideoListText = (_b = _this.playVideoList) === null || _b === void 0 ? void 0 : _b.querySelector(".dz-player-videoList-text");
            var playVideoListOver = (_c = _this.playVideoList) === null || _c === void 0 ? void 0 : _c.querySelector(".dz-player-videoList_over");
            (_d = _this.playVideoList) === null || _d === void 0 ? void 0 : _d.addEventListener("mouseenter", function () {
                playVideoListBox.style.display = 'block';
                playVideoListOver.style.display = "block";
                playVideoListBox.addEventListener("mouseleave", function () {
                    playVideoListBox.style.display = "none";
                    playVideoListOver.style.display = "none";
                });
            });
            _this.playVideoList.addEventListener("mouseleave", function () {
                playVideoListBox.style.display = "none";
                playVideoListOver.style.display = "none";
            });
            _this.playVideoListItem = _this.controlElement.querySelectorAll(".videoList-box__wrap-item");
            if (!_this.playVideoListItem) {
                return;
            }
            var _loop_2 = function (i) {
                if ((_e = _this.player.options.url[i]) === null || _e === void 0 ? void 0 : _e.default) {
                    playVideoListText.textContent = _this.player.options.url[i].label;
                }
                _this.playVideoListItem[i].addEventListener("click", function () {
                    var _a;
                    (_a = playVideoListBox === null || playVideoListBox === void 0 ? void 0 : playVideoListBox.querySelector(".select")) === null || _a === void 0 ? void 0 : _a.classList.remove("select");
                    if (_this.playVideoListItem) {
                        _this.playVideoListItem[i].classList.add("select");
                        if (_this.player.options.url && _this.player.options.url[i]) {
                            var currentTime = _this.player.video.currentTime;
                            //设置video播放url
                            _this.player.src(_this.player.options.url[i].value);
                            _this.player.video.currentTime = currentTime;
                            _this.player.play();
                        }
                        playVideoListText.textContent = _this.playVideoListItem[i].innerText;
                    }
                });
            };
            for (var i = 0; i < _this.player.options.url.length; i++) {
                _loop_2(i);
            }
        };
        // 初始化音量控制栏
        this.initVolumeButton = function () {
            var volume = _this.player.options.volume ? (_this.player.options.volume > 1 ? _this.player.options.volume / 100 : _this.player.options.volume) : 1;
            _this.player.video.volume = volume;
            if (!_this.controlOptions.volumeControl)
                return;
            // 设置控制条声音控制栏的事件处理函数
            _this.muteButton = _this.controlElement.querySelector('.dz-player-volume-icon');
            _this.muteButton.addEventListener('click', _this.player.mute);
            _this.switchVolumeIcon();
            _this.volumeSlider = _this.controlElement.querySelector('.dz-player-volume-slider');
            _this.volumeSlider.addEventListener('input', throttle(_this.onVolumeChange, 100));
            _this.volumeControlBar = _this.controlElement.querySelector('.dz-player-volume-bar');
            _this.volumeControlBar.addEventListener('mouseenter', function () {
                var _a;
                (_a = _this.volumeSlider) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "width:60px;");
            });
            _this.volumeControlBar.addEventListener('mouseleave', function () {
                var _a;
                (_a = _this.volumeSlider) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "width:0px;");
            });
        };
        // 初始化全屏按钮
        this.initFullScreenButton = function () {
            // 设置控制条全屏按钮的事件处理函数
            _this.fullScreenButton = _this.controlElement.querySelector('.dz-player-fullscreen');
            if (!_this.fullScreenButton)
                return;
            _this.fullScreenButton.addEventListener('click', _this.player.toggleFullScreen);
            _this.fullScreenButton.innerHTML = Icons.full;
        };
        // 监听控制栏的尺寸变化, 控制显示隐藏 播放按钮，视频时间和音量控制栏
        this.watchControlResize = function () {
            if (!_this.player.controls) {
                return;
            }
            var resizeObserver = new ResizeObserver(throttle(function (entries) {
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    var entry = entries_1[_i];
                    if (!entry.contentBoxSize)
                        return;
                    var _a = entry.contentBoxSize[0], inlineSize = _a.inlineSize, blockSize = _a.blockSize;
                    // 播放按钮的显示隐藏
                    if (_this.playButton) {
                        if (blockSize < 40 || inlineSize < 40) {
                            _this.playButton.style.display = 'none';
                        }
                        else {
                            _this.playButton.style.display = 'grid';
                        }
                    }
                    // 控制栏的显示隐藏
                    if (blockSize < 75 || inlineSize < 60) {
                        _this.bottomControlBar.style.display = 'none';
                    }
                    else {
                        _this.bottomControlBar.style.display = 'flex';
                    }
                    // 播放按钮的缩放
                    if (_this.playButton) {
                        if (blockSize < 100 || inlineSize < 100) {
                            _this.playButton.style.scale = '0.5';
                        }
                        else {
                            _this.playButton.style.scale = '1';
                        }
                    }
                    // 控制全屏按钮的显示隐藏
                    if (_this.fullScreenButton && inlineSize < 200) {
                        _this.fullScreenButton.style.display = 'none';
                    }
                    else {
                        _this.fullScreenButton && (_this.fullScreenButton.style.display = 'block');
                    }
                    // 控制播放时间显示隐藏
                    if (_this.playTime && inlineSize < 330) {
                        _this.playTime.style.display = 'none';
                    }
                    else {
                        _this.playTime && (_this.playTime.style.display = 'block');
                    }
                    // 控制音量控制栏的显示隐藏
                    if (_this.volumeControlBar && inlineSize < 400) {
                        _this.volumeControlBar.style.display = 'none';
                    }
                    else {
                        _this.volumeControlBar && (_this.volumeControlBar.style.display = 'flex');
                    }
                }
            }, 30));
            resizeObserver.observe(_this.controlElement);
        };
        // 初始化控制栏相关事件
        this.initControlsEvent = function () {
            // 由于暂时缺少数据，播放已停止。
            _this.player.on('waiting', _this.onWaiting);
            // 更新播放时间
            _this.player.on('timeupdate', _this.onTimeupdate);
            // 由于缺乏数据而暂停或延迟后，播放准备开始。
            _this.player.on('playing', _this.onPlaying);
            _this.player.on('canplay', function () { return _this.toggleLoading(false); });
            _this.player.on('seeked', function () { return _this.onSeeked; });
            _this.player.on('loadedmetadata', _this.initTimeTip);
            // 播放，暂停后自动隐藏控制栏
            _this.player.on('pause', _this.setAutoHide);
            _this.player.on('play', _this.setAutoHide);
            _this.initMountTargetEvent();
            // 监听控制栏的尺寸变化
            _this.watchControlResize();
        };
        // 初始化时间 tip 逻辑
        this.initTimeTip = function () {
            var tooltip = _this.controlElement.querySelector('.dz-player-play-time-tip');
            var duration = _this.player.duration;
            var hasMoved = false;
            var outOfBounds = false;
            _this.seekBar && _this.seekBar.addEventListener('input', function (event) {
                var target = event.target;
                tooltip.textContent = formatTime((+target.value / 100) * duration);
                if (isMobile && hasMoved && !outOfBounds)
                    tooltip.style.display = 'block';
            });
            // 显示 tip
            var showTip = function (event) {
                var seekBarWidth = _this.seekBar && _this.seekBar.clientWidth;
                var positionX = 0;
                if (event instanceof MouseEvent) {
                    tooltip.style.display = 'block';
                    positionX = event.offsetX;
                    var timeStamp = (positionX / seekBarWidth) * duration;
                    tooltip.textContent = formatTime(timeStamp);
                }
                if (event instanceof TouchEvent) {
                    var touch = event.touches[0];
                    var target = event.target;
                    var rect = target.getBoundingClientRect();
                    positionX = touch.clientX - rect.left;
                    hasMoved = true;
                }
                if (positionX < 0 || positionX > seekBarWidth) {
                    tooltip.style.display = 'none';
                    outOfBounds = true;
                }
                outOfBounds = false;
                tooltip.style.left = positionX - tooltip.clientWidth / 2 + 'px';
            };
            _this.seekBar && _this.seekBar.addEventListener('touchmove', showTip);
            _this.seekBar && _this.seekBar.addEventListener('mousemove', showTip);
            // 隐藏 tip
            var hideTip = function () {
                setTimeout(function () {
                    tooltip.style.display = 'none';
                    hasMoved = false;
                }, 100);
            };
            _this.seekBar && _this.seekBar.addEventListener('mouseleave', hideTip);
            _this.seekBar && _this.seekBar.addEventListener('touchend', hideTip);
        };
        // 初始化控制栏容器相关事件
        this.initMountTargetEvent = function () {
            if (isMobile)
                _this.mountTarget.addEventListener('touchstart', _this.setAutoHide);
            _this.mountTarget.addEventListener('click', _this.setAutoHide);
            _this.mountTarget.addEventListener('mousemove', _this.setAutoHide);
        };
        // 移除控制栏容器相关事件
        this.removeMountTargetEvent = function () {
            // this.mountTarget?.removeEventListener('mousemove', this.setAutoHide)
            // this.mountTarget?.removeEventListener('mouseleave', this.hide)
        };
        // 设置控制栏的自动隐藏
        this.setAutoHide = function () {
            _this.show();
            clearTimeout(_this.autoHideTimer);
            _this.autoHideTimer = window.setTimeout(function () {
                !_this.player.paused && _this.hide();
            }, 2 * 1000);
        };
        // 显示控制栏
        this.show = function () {
            _this.mountTarget.classList.remove('dz-player-hide-controller');
        };
        // 隐藏控制栏
        this.hide = function () {
            _this.mountTarget.classList.add('dz-player-hide-controller');
        };
        // 切换控制条显示隐藏
        this.toggle = function () {
            if (!_this.mountTarget.classList.contains('dz-player-hide-controller')) {
                _this.hide();
            }
            else {
                _this.show();
            }
        };
        // 更新播放进度条
        this.updateSeekBar = function (once) {
            if (_this.player.duration === 0 && _this.player.video.currentTime === 0 && _this.player.clipStart === 0) {
                _this.seekBar && (_this.seekBar.value = '0');
            }
            if (once)
                return;
            _this.playRaf = window.requestAnimationFrame(function () { return _this.updateSeekBar(); });
            _this.seekBar && (_this.seekBar.value = (((_this.player.video.currentTime - _this.player.clipStart) / _this.player.duration) * 100).toString());
        };
        // 拖动进度条
        this.onSeeking = function (event) {
            event.preventDefault();
            event.stopPropagation();
            var target = event.target;
            var seekTime = Number((parseFloat(target.value) / 100) * _this.player.duration) + Number(_this.player.clipStart);
            _this.player.seek(seekTime);
        };
        // 快进结束
        this.onSeeked = function () {
            // 取消动画
            _this.playRaf && cancelAnimationFrame(_this.playRaf);
            _this.updateSeekBar(true);
        };
        // 更新播放时间
        this.onTimeupdate = function () {
            if (!_this.playTime && !_this.controlOptions.manualMount)
                return;
            var progress = +_this.seekBar.value;
            var currentTime = progress * _this.player.duration * 0.01;
            _this.playTime && (_this.playTime.textContent = "".concat(secondToTime(currentTime < 0 ? 0 : currentTime), " / ").concat(secondToTime(_this.player.duration)));
            var videoCurrentTime = _this.player.video.currentTime;
            // 当前播放时间大于结束时间时，暂停播放 / 循环播放
            if (!_this.player.handleVideoEndByOuter && _this.player.clipEnd && videoCurrentTime >= _this.player.clipEnd - 0.1) {
                _this.player.pause();
                _this.player.seek(Number(_this.player.clipStart));
                _this.updateSeekBar(true);
                if (_this.player.options.loop)
                    _this.player.play();
            }
        };
        // 调整视频音量
        this.onVolumeChange = function (event) {
            var target = event.target;
            // 调整视频音量
            _this.player.volume(Number(target.value));
        };
        // waiting 事件处理函数
        this.onWaiting = function () {
            if (!_this.player.paused)
                _this.player.paused = true;
            _this.toggleLoading(true);
        };
        // playing 事件处理函数
        this.onPlaying = function () {
            if (_this.player.paused)
                _this.player.paused = false;
            _this.toggleLoading(false);
        };
        // 切换音量图标
        this.switchVolumeIcon = function () {
            if (!_this.controlOptions.volumeControl)
                return;
            if (_this.player.video.muted || _this.player.video.volume === 0) {
                _this.muteButton.innerHTML = Icons.volumeOff;
            }
            else if (_this.player.video.volume > 0 && _this.player.video.volume < 1) {
                _this.muteButton.innerHTML = Icons.volumeDown;
            }
            else {
                _this.muteButton.innerHTML = Icons.volumeUp;
            }
        };
        // 销毁事件
        this.destroy = function () {
            clearTimeout(_this.autoHideTimer);
        };
        this.player = player;
        this.controlOptions = player.options.controlOptions || {};
        this.mountTarget = this.controlOptions.mountTarget || this.player.videoContainer;
        this.initControls();
        /**
         * 必须在initControls之后，挂在自定义按钮必须先初始化init
         */
        this.toolBar = new ToolBar(player);
        this.initControlsEvent();
    }
    // 设置控制条是否显示
    Controller.prototype.setVisible = function (val) {
        val ? this.show() : this.hide();
    };
    // 控制 loading 动画的显示与隐藏
    Controller.prototype.toggleLoading = function (show) {
        if (show) {
            this.loading.style.opacity = '1';
            this.playButton && (this.playButton.style.opacity = '0');
        }
        else {
            this.loading.style.opacity = '0';
            this.playButton && (this.playButton.style.opacity = '1');
        }
    };
    return Controller;
}());

/**
 * @description Video 事件
 * 以 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video#%E4%BA%8B%E4%BB%B6 为准。
 */
var VideoEventsEnum;
(function (VideoEventsEnum) {
    /**
     * @description 当音频处理程序处理缓冲区时触发。(The input buffer of a ScriptProcessorNode is ready to be processed.)
     */
    VideoEventsEnum["audioprocess"] = "audioprocess";
    /**
     * @description 浏览器可以播放媒体文件了，但估计没有足够的数据来支撑播放到结束，不必停下来进一步缓冲内容。
     */
    VideoEventsEnum["canplay"] = "canplay";
    /**
     * @description 浏览器估计它可以在不停止内容缓冲的情况下播放媒体直到结束。
     */
    VideoEventsEnum["canplaythrough"] = "canplaythrough";
    /**
     * @description OfflineAudioContext 渲染完成。
     */
    VideoEventsEnum["complete"] = "complete";
    /**
     * @description  duration 属性的值改变时触发。
     */
    VideoEventsEnum["durationchange"] = "durationchange";
    /**
     * @description 媒体内容变为空；例如，当这个 media 已经加载完成（或者部分加载完成），则发送此事件，并调用 load() 方法重新加载它。
     */
    VideoEventsEnum["emptied"] = "emptied";
    /**
     * @description 视频停止播放，因为 media 已经到达结束点。
     */
    VideoEventsEnum["ended"] = "ended";
    /**
     * @description media 中的首帧已经完成加载。
     */
    VideoEventsEnum["loadeddata"] = "loadeddata";
    /**
     * @description 已加载元数据。
     */
    VideoEventsEnum["loadedmetadata"] = "loadedmetadata";
    /**
     * @description 播放已暂停。
     */
    VideoEventsEnum["pause"] = "pause";
    /**
     * @description 播放已开始。
     */
    VideoEventsEnum["play"] = "play";
    /**
     * @description //由于缺乏数据而暂停或延迟后，播放准备开始。
     */
    VideoEventsEnum["playing"] = "playing";
    /**
     * @description 在浏览器加载资源时周期性触发。
     */
    VideoEventsEnum["progress"] = "progress";
    /**
     * @description 播放速率发生变化。
     */
    VideoEventsEnum["ratechange"] = "ratechange";
    /**
     * @description 跳帧（seek）操作完成。
     */
    VideoEventsEnum["seeked"] = "seeked";
    /**
     * @description 跳帧（seek）操作开始。
     */
    VideoEventsEnum["seeking"] = "seeking";
    /**
     * @description 用户代理（user agent）正在尝试获取媒体数据，但数据意外未出现。
     */
    VideoEventsEnum["stalled"] = "stalled";
    /**
     * @description 媒体数据加载已暂停。
     */
    VideoEventsEnum["suspend"] = "suspend";
    /**
     * @description currentTime 属性指定的时间发生变化。
     */
    VideoEventsEnum["timeupdate"] = "timeupdate";
    /**
     * @description 音量发生变化。
     */
    VideoEventsEnum["volumechange"] = "volumechange";
    /**
     * @description 由于暂时缺少数据，播放已停止。
     */
    VideoEventsEnum["waiting"] = "waiting";
    /**
     * @description 在发生错误时触发。
     */
    VideoEventsEnum["error"] = "error";
    /**
     * @description 在视频/音频（audio/video）终止加载时触发。
     */
    VideoEventsEnum["abort"] = "abort";
    /**
     * @description 在浏览器开始加载媒体数据时触发。
     */
    VideoEventsEnum["loadstart"] = "loadstart";
    /**
     * @description 当音频数据可用时触发。
     */
    VideoEventsEnum["mozaudioavailable"] = "mozaudioavailable";
})(VideoEventsEnum || (VideoEventsEnum = {}));
/**
 * @description 播放器事件
 */
var PlayerEventsEnum;
(function (PlayerEventsEnum) {
    /**
     * @description 播放器销毁时。
     */
    PlayerEventsEnum["destroy"] = "destroy";
    /**
     * @description 播放器 resize 时。
     */
    PlayerEventsEnum["resize"] = "resize";
    /**
     * @description 播放器截屏时。
     */
    PlayerEventsEnum["screenshot"] = "screenshot";
    // fullscreen = 'fullscreen',
    // fullscreen_cancel = 'fullscreen_cancel',
    // webfullscreen = 'webfullscreen',
    // webfullscreen_cancel = 'webfullscreen_cancel',
})(PlayerEventsEnum || (PlayerEventsEnum = {}));

var DzPlayEvents = /** @class */ (function () {
    function DzPlayEvents(player) {
        this.events = {};
        this.player = player;
        // 视频相关事件
        this.videoEvents = Object.keys(VideoEventsEnum).map(function (key) { return VideoEventsEnum[key]; });
        // 播放器相关事件
        this.playerEvents = Object.keys(PlayerEventsEnum).map(function (key) { return PlayerEventsEnum[key]; });
        // TODO 测试用
        // this.videoEvents.forEach((eventName) => this.on(eventName, () => console.log(eventName)))
        // this.on('timeupdate', (e) => console.log('timeupdate',e.target.currentTime))
    }
    // 判断事件类型
    DzPlayEvents.prototype.type = function (name) {
        if (this.playerEvents.indexOf(name) !== -1)
            return 'player';
        if (this.videoEvents.indexOf(name) !== -1)
            return 'video';
        console.error("".concat(name, " \u4E8B\u4EF6\u4E0D\u5B58\u5728\uFF0C\u8BF7\u67E5\u770B\u4E0B\u6587\u6863"));
        return null;
    };
    // 绑定事件
    DzPlayEvents.prototype.on = function (name, callback) {
        var type = this.type(name);
        if (type && typeof callback !== 'function')
            return console.error("".concat(name, " \u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570"));
        if (!this.events[name])
            this.events[name] = [];
        this.events[name].push(callback);
        // video 事件，直接绑定到 video 元素上
        if (type === 'video') {
            this.player.video.addEventListener(name, callback);
        }
        // 播放器的事件
        if (type === 'player') {
            this.events[name].push(callback);
        }
    };
    // 移除事件
    DzPlayEvents.prototype.off = function (name, callback) {
        if (this.type(name) && this.events[name] && this.events[name].length) {
            var index = this.events[name].indexOf(callback);
            if (index === -1)
                return;
            this.events[name].splice(index, 1);
            // 移除事件监听器
            if (this.type(name) === 'video') {
                this.player.video.removeEventListener(name, callback);
            }
        }
    };
    // 触发事件
    DzPlayEvents.prototype.emit = function (name, data) {
        if (!this.events[name] || !this.events[name].length)
            return;
        this.events[name].forEach(function (callback) {
            callback(data);
        });
    };
    // 触发一次后自动注销
    DzPlayEvents.prototype.once = function (name, callback) {
        var _this = this;
        var fn = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            callback.apply(void 0, arg);
            _this.off(name, fn);
        };
        this.on(name, fn);
    };
    return DzPlayEvents;
}());

var DzPlayer = /** @class */ (function () {
    function DzPlayer(options) {
        var _this = this;
        this.paused = true; // 是否暂停
        this.videoType = 'auto'; // 视频类型
        this.duration = 0; // 视频时长
        this.handleVideoEndByOuter = false; // 是否由外部控制视频结束
        this.onLoadedMetadata = function () {
            // 更新视频时长
            _this.duration = _this.clipEnd - _this.clipStart || _this.video.duration;
            _this.controller && _this.controller.onTimeupdate();
        };
        // 当视频开始播放时，
        this.onPlay = function () {
            // 更新播放器状态
            _this.paused = false;
            if (!_this.controller)
                return;
            _this.controller.playButton && (_this.controller.playButton.innerHTML = Icons.pause);
            _this.controller.controlPlayButton && (_this.controller.controlPlayButton.innerHTML = Icons.controlPause);
            _this.controller.updateSeekBar();
        };
        // 当视频暂停播放时
        this.onPause = function () {
            // 更新播放器状态
            _this.paused = true;
            if (!_this.controller)
                return;
            _this.controller.playButton && (_this.controller.playButton.innerHTML = Icons.play);
            _this.controller.controlPlayButton && (_this.controller.controlPlayButton.innerHTML = Icons.controlPlay);
            // 取消动画
            cancelAnimationFrame(_this.controller.playRaf);
        };
        // 使用 hls 播放视频
        this.useHls = function (video) {
            try {
                _this.hls = new Hls();
                _this.hls.loadSource(video.src);
                _this.hls.attachMedia(video);
            }
            catch (e) {
                console.error("Error: Can't find Hls.", e);
            }
        };
        // 销毁 hls 实例
        this.destroyHls = function () {
            _this.hls && _this.hls.destroy();
        };
        // 播放视频
        this.play = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.video.play()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        // 暂停视频
        this.pause = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.video.pause()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        // 切换播放状态
        this.togglePlay = function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.video.paused) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.play()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.pause()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // 跳转到视频指定位置，调整视频播放进度
        this.seek = function (time) {
            _this.video.currentTime = Number(time);
        };
        // 静音或取消静音
        this.mute = function () {
            // 静音或取消静音
            _this.video.muted = !_this.video.muted;
            _this.controller.volumeSlider.value = _this.video.muted ? '0' : _this.video.volume + '';
            _this.controller.muteButton.innerHTML = _this.video.muted ? Icons.volumeOff : Icons.volumeUp;
        };
        // 进入或退出全屏模式
        this.toggleFullScreen = function () {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            else {
                if (_this.video.requestFullscreen) {
                    _this.video.requestFullscreen();
                }
                else if (_this.video.mozRequestFullScreen) {
                    _this.video.mozRequestFullScreen();
                }
                else if (_this.video.webkitRequestFullscreen) {
                    _this.video.webkitRequestFullscreen();
                }
                else if (_this.video.webkitSupportsFullscreen) {
                    _this.video.webkitEnterFullscreen();
                }
            }
        };
        /**
         * @description 动态设置url地址
         */
        this.src = function (src) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.video.setAttribute("src", src);
                this.video.load();
                return [2 /*return*/];
            });
        }); };
        // 控制水印的显示与隐藏
        this.handleWaterMarkShow = function () {
            var _a, _b;
            // 水印节点
            _this.waterMark = _this.videoContainer.querySelector('.dz-player-watermark');
            if (_this.waterMark) {
                if ((_a = _this.options.waterMark) === null || _a === void 0 ? void 0 : _a.show) {
                    _this.waterMark.setAttribute("style", _this.options.waterMark.style);
                    _this.waterMark.style.display = 'block';
                    // 设置水印图案
                    _this.waterMark.style.backgroundImage = "url(".concat((_b = _this.options.waterMark) === null || _b === void 0 ? void 0 : _b.url, ")");
                }
            }
        };
        // 挂载控制器到目标节点
        this.mountController = function (mountTarget) {
            if (!_this.controls)
                return;
            if (_this.options.controlOptions && _this.options.controlOptions.nativeControls)
                return;
            _this.controller.removeMountTargetEvent();
            _this.controller.mountTarget = mountTarget;
            _this.controller.initMountTargetEvent();
            mountTarget.appendChild(_this.controller.controlElement);
        };
        // 选取视频片段
        this.cutVideo = function (start, end) {
            _this.clipStart = start;
            _this.clipEnd = end;
            _this.duration = end - start;
            _this.seek(start);
            _this.controls && _this.controller.initTimeTip();
            _this.controls && _this.controller.updateSeekBar(true);
        };
        // 销毁播放器
        this.destroy = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.destroyHls();
                        return [4 /*yield*/, this.pause()];
                    case 1:
                        _a.sent();
                        this.video.src = '';
                        this.container.innerHTML = '';
                        this.controller && this.controller.destroy();
                        return [2 /*return*/];
                }
            });
        }); };
        this.container = options.container;
        this.options = options;
        this.controls = options.controls != undefined ? options.controls : true;
        this.clipStart = options.clipStart || 0;
        this.clipEnd = options.clipEnd || 0;
        this.handleVideoEndByOuter = options.handleVideoEndByOuter || false;
        // 播放器事件系统
        this.events = new DzPlayEvents(this);
        this.setup();
    }
    DzPlayer.prototype.setup = function () {
        this.videoContainer = document.createElement('div');
        this.videoContainer.className = 'dz-player-container';
        //如果设置了自定义样式，则重新设置style
        if (this.options.customStyle) {
            this.videoContainer.setAttribute("style", this.options.customStyle);
        }
        this.videoContainer.style.width = this.options.width || '100%';
        this.videoContainer.style.height = this.options.height || '100%';
        // 播放器模板
        //动态获取src,如果url是字符串，则直接赋值，
        //如果是数组，则获取值为default的，如果没有设置default，则取第一个
        var src = "";
        if (isString(this.options.url)) {
            src = this.options.url;
        }
        else if (isArray(this.options.url)) {
            var urls_1 = this.options.url;
            urls_1.map(function (item) {
                src = item.default ? item.value : urls_1[0].value;
            });
        }
        this.videoContainer.innerHTML = anonymous$1(__assign(__assign({}, (this.options || {})), { src: src }));
        // 将 player 添加到指定容器中
        this.container.innerHTML = '';
        this.container.appendChild(this.videoContainer);
        // 视频节点
        this.video = this.videoContainer.querySelector('.dz-player-video');
        // 设置水印图案
        this.handleWaterMarkShow();
        // 初始化视频
        this.initVideo();
        // 播放器控制器
        if (this.controls) {
            this.controller = new Controller(this);
        }
        this.seek(this.clipStart);
    };
    // 初始化播放器,设置视频相关回调函数
    DzPlayer.prototype.initVideo = function () {
        var _this = this;
        // 初始化 MSE 支持
        this.initMSE(this.video, this.options.type);
        // 播放回调
        this.on('play', this.onPlay);
        // 暂停播放
        this.on('pause', this.onPause);
        // 播放结束
        this.on('ended', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.clipEnd)
                            return [2 /*return*/];
                        if (!!this.options.loop) return [3 /*break*/, 2];
                        !this.paused && this.seek(this.clipStart);
                        return [4 /*yield*/, this.pause()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        !this.paused && this.seek(this.clipStart);
                        return [4 /*yield*/, this.play()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.controller && this.controller.updateSeekBar(true);
                        return [2 /*return*/];
                }
            });
        }); });
        // 视频元数据加载完成
        this.on('loadedmetadata', this.onLoadedMetadata);
    };
    // 注册事件
    DzPlayer.prototype.on = function (name, callback) {
        this.events.on(name, callback);
    };
    // 注册一次性事件
    DzPlayer.prototype.once = function (name, callback) {
        this.events.once(name, callback);
    };
    // 手动触发事件
    DzPlayer.prototype.emit = function (name, data) {
        this.events.emit(name, data);
    };
    // 移除事件
    DzPlayer.prototype.off = function (name, callback) {
        this.events.off(name, callback);
    };
    // MSE 支持
    DzPlayer.prototype.initMSE = function (video, type) {
        this.videoType = type;
        if (type === 'hls') {
            this.videoType = 'hls';
            // 如果浏览器支持播放 HLS 视频流。
            if (video.canPlayType('application/x-mpegURL') || video.canPlayType('application/vnd.apple.mpegURL')) {
                this.videoType = 'hls';
            }
            // 错误传参时，纠正播放类型
            if (/.mp4(#|\?|$)/i.exec(video.src)) {
                this.videoType = 'normal';
            }
        }
        if (type === 'auto') {
            this.videoType = 'normal';
            if (/m3u8(#|\?|$)/i.exec(video.src))
                this.videoType = 'hls';
            if (/.flv(#|\?|$)/i.exec(video.src))
                this.videoType = 'flv';
            if (/.mpd(#|\?|$)/i.exec(video.src))
                this.videoType = 'dash';
        }
        switch (this.videoType) {
            case 'flv':
                console.error('暂不支持 flv 格式视频');
                break;
            case 'dash':
                console.error('暂不支持 dash 格式视频');
                break;
            case 'hls':
                this.useHls(video);
                break;
        }
    };
    // 设置音量
    DzPlayer.prototype.volume = function (val) {
        var percentage = parseFloat((val || this.video.volume));
        if (!isNaN(percentage)) {
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.video.volume = percentage;
            if (this.video.muted) {
                this.video.muted = false;
            }
            this.controller.switchVolumeIcon();
        }
        return this.video.volume;
    };
    /**
     * @description 视频截图
     * @param download
     * @param name
     * @returns
     */
    DzPlayer.prototype.screenshot = function (download, name) {
        if (download === void 0) { download = true; }
        if (name === void 0) { name = 'screenshot.png'; }
        try {
            //截图视频
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            // 获取视频宽高
            var videoInfo = getVideoInfo(this.video);
            canvas.width = videoInfo.width;
            canvas.height = videoInfo.height;
            var mediaRatio = this.video.videoWidth / this.video.videoHeight;
            var canvasRatio = canvas.width / canvas.height;
            var sx = 0, sy = 0, sw = this.video.videoWidth, sh = this.video.videoHeight;
            var dx = void 0, dy = void 0, dw = void 0, dh = 0;
            if (mediaRatio > canvasRatio) {
                dw = canvas.width;
                dh = canvas.width / mediaRatio;
                dx = 0;
                dy = Math.round((canvas.height - dh) / 2);
            }
            else if (mediaRatio === canvasRatio) {
                dw = canvas.width;
                dh = canvas.height;
                dx = 0;
                dy = 0;
            }
            else if (mediaRatio < canvasRatio) {
                dw = canvas.height * mediaRatio;
                dh = canvas.height;
                dx = Math.round((canvas.width - dw) / 2);
                dy = 0;
            }
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(this.video, sx, sy, sw, sh, dx, dy, dw, dh);
            if (download && canvas.toDataURL('image/png', 1)) {
                downloadBase64(name, canvas.toDataURL());
            }
            return canvas.toDataURL() || null;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    };
    return DzPlayer;
}());

export { DzPlayer as default };
