const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  
function superbowlWin(array){
    const denverWins = array.find(array => array.result === "W")
return denverWins ? denverWins.year : undefined
}

       