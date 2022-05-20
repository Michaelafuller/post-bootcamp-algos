function alphabetWar(fight)
{
  let leftSide = {
    w : 4,
    p : 3,
    b : 2,
    s : 1
  }
  
  let rightSide = {
    m : 4,
    q : 3,
    d : 2,
    z : 1
  }
  
  let leftSideSum = 0;
  let rightSideSum = 0;
  
  for(let i = 0; i < fight.length; i++) {
    if(leftSide.hasOwnProperty(fight[i])) {
      leftSideSum += leftSide[fight[i]]
    }
    if(rightSide.hasOwnProperty(fight[i])) {
      rightSideSum += rightSide[fight[i]]
    }
  }
  if(leftSideSum === rightSideSum) {
    return "Let's fight again!";
  }
  if(leftSideSum > rightSideSum) {
    return "Left side wins!";
  }
  else {
    return "Right side wins!"
  }
   
}

console.log(alphabetWar("wwwwww"));