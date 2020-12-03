let sports:string[]=["Cricket","Footbal","Hockey","Swimming"]
for(let i=0;i<sports.length;i++)
{
    console.log(sports[i]);
}

// simplified or enhanced for loop

for(let temp of sports)
{
    if(temp == "Cricket")
    {
      console.log(temp+ " <<My favourite");
    }
    else{
        console.log(temp)
    }
}