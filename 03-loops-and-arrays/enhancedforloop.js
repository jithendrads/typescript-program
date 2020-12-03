var sports = ["Cricket", "Footbal", "Hockey", "Swimming"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
// simplified or enhanced for loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var temp = sports_1[_i];
    if (temp == "Cricket") {
        console.log(temp + " <<My favourite");
    }
    else {
        console.log(temp);
    }
}
