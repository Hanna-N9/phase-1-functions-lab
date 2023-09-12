// Code your solution in this file!

//In order to not get negative numbers, need to use Math.abs() method
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

//To avoid repetition (same arguements from both functions), invoke the previous function with its return value to multiply by 264 inside this function.
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}
//In order to not get negative numbers, need to use Math.abs() method
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

//Using previous function with its result as total feet for inside this function
function calculatesFarePrice(start, destination) {
  const totalFeetTravelled = distanceTravelledInFeet(start, destination);
  if (totalFeetTravelled <= 400) {
    return 0;
  } else if (400 < totalFeetTravelled && totalFeetTravelled <= 2000) {
    return 0.02 * (totalFeetTravelled - 400);
  } else if (2000 < totalFeetTravelled && totalFeetTravelled < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
