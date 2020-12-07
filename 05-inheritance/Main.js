"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
//import { Shape} from "./Shape"
var myShape = new Shape_1.Shape(10, 20);
//console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(1, 2, 3);
//console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
//console.log(myRectangle.getInfo());
var shapeArray = [];
shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectangle);
for (var _i = 0, shapeArray_1 = shapeArray; _i < shapeArray_1.length; _i++) {
    var tempShape = shapeArray_1[_i];
    console.log(tempShape.getInfo());
}
