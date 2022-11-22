// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  if(someValue >= 42){
    return someValue - 42;
  }else{
    return 42 - someValue
  }
}
function distanceFromHqInFeet(someValue){
  function distanceFromHqInBlocks(someValue) {
    if(someValue >= 42){
      return someValue - 42;
    }else{
      return 42 - someValue
    }
  }

  return distanceFromHqInBlocks(someValue)  * 264
}
function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
      return (destination - start) * 264;
  } else return (start - destination) * 264;
  }

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
      return 0;
  } else if (distance > 400 && distance <= 2000) {
      return 2/100 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
      return 25;
  } else (distance > 2500)
  return 'cannot travel that far'
}
