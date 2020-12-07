import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

import {Coach} from "./Coach"

let cricketCoach=new CricketCoach();
//console.log(cricketCoach.getDailyWorkout());

let golfCoach=new GolfCoach();
//console.log(golfCoach.getDailyWorkout());


let myCoaches:Coach[]=[];
myCoaches.push(cricketCoach);
myCoaches.push(golfCoach);

for(let tempCoach of myCoaches)
{
    console.log(tempCoach.getDailyWorkout());
}
