let array = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];
function points(games) {
    let sum = 0;
    games.forEach(game => {
      if (parseInt(game.charAt(0)) > parseInt(game.charAt(2))){
        sum += 3;
      } else if (parseInt(game.charAt(0)) === parseInt(game.charAt(2))) {
        sum += 1;
      }
     //console.log(game);
      //console.log(game.charAt(0) + " " + game.charAt(2));
    })
    console.log(sum);
  }

points(array);