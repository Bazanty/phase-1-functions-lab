// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let Hq = 42
   return Math.abs(someValue-42);
}


function distanceFromHqInFeet(someValue) {
 return distanceFromHqInBlocks(someValue)*264;
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
 function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start)*264;
     //returns the number of feet traveled
  }
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    }else if(distance >= 400 && distance < 2000){
        return Math.abs((distance - 400) * 0.02);
    }else if(distance >= 2000 && distance <=2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
    
    //returns the fare for the customer
  }
