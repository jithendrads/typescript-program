import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

//import { Shape} from "./Shape"

//let myShape=new Shape(10,20);
//console.log(myShape.getInfo());

let myCircle=new Circle(1,2,3);
//console.log(myCircle.getInfo());

let myRectangle=new Rectangle(1,2,3,4);
//console.log(myRectangle.getInfo());

let shapeArray:Shape[]=[];
//shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectangle);

for(let tempShape of shapeArray)
{
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}