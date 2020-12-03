var scores = [5, 5.5, 6, 1, 10];
var total = 0;
for (var i = 0; i < scores.length; i++) {
    console.log(scores[i]);
    total += scores[i];
}
var average = total / scores.length;
console.log("Average score is " + average);
