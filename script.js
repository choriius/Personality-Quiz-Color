

//color score variables
var color = ["tangerine",  //1
             "peach",      //2
             "lemon",      //3
             "bubble",     //4
             "white",      //5
             "beige",      //6
             "ivory",      //7
             "gold",       //8
             "azure",      //9
             "rainbow",    //10
             "sage",       //11
             "lavender",   //12
             "indicolite"];//13

var score = [];
var winColor = [];

//Detects Clicks
//document.getElementById("q1a2").className += " selected ";






//Calculation from Questions





function setScoreAll(list, value) {
  score = [];
  winColor = [];
  
  for (let i = 0; i < color.length; i++) {
    score.push(0);
  }
}

function add (index, amount) {
  var before = score[index];
  score[index] = before + amount;  
}

function winIndex () {
  var index = [];
  var max = Math.max.apply(null, score);
  console.log("Max score = " + max);
  
  for (let i1 = 0; i1 < score.length; i1++) {
    if (score[i1] == max) {
      index.push(i1);
    }
  }
  return index;

}

/*Testing
setScoreAll(score, 0);
console.log(score.join(" ,") + "   length:" + score.length);

add(3, 3);
add(4, 3);
add(6, 3);

console.log(score.join(" ,") + "   length:" + score.length);

console.log(winIndex().join(" ,")); */