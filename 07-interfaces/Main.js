"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var cricketCoach = new CricketCoach_1.CricketCoach();
//console.log(cricketCoach.getDailyWorkout());
var golfCoach = new GolfCoach_1.GolfCoach();
//console.log(golfCoach.getDailyWorkout());
var myCoaches = [];
myCoaches.push(cricketCoach);
myCoaches.push(golfCoach);
for (var _i = 0, myCoaches_1 = myCoaches; _i < myCoaches_1.length; _i++) {
    var tempCoach = myCoaches_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
