"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.B = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class B {
  constructor() {
    _defineProperty(this, "willDo", () => {
      console.log("Is going to do");
    });

    _defineProperty(this, "letsGo", function () {
      console.log("We are going");
    });
  }

  doIt() {
    console.log("Did it");
  }

}

exports.B = B;