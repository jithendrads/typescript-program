let scores:number[]=[5,5.5,6,1,10];
let total:number=0;
for(let i=0;i<scores.length;i++)
{
console.log(scores[i]);
total+=scores[i];
}

let average=total/scores.length;
console.log("Average score is "+ average);