// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    let blocks;
    if (start > 42) {
      blocks = start - 42;  
    }else {
        blocks = (start - 42) * -1
    }
    return blocks
}
(distanceFromHqInBlocks(50));
(distanceFromHqInBlocks(38));



function distanceFromHqInFeet(start){
    return distanceFromHqInBlocks(start) * 264
}




function distanceTravelledInFeet(start, destination) {
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start) ;
}
// distanceTravelledInFeet(43, 48)
// distanceTravelledInFeet(50, 60)
// distanceTravelledInFeet(34, 28)



function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    if(feet < 400){
        return 0
    }
    else if(feet > 400 && feet <= 2000){
        return (feet - 400) * 0.02 
    }
    else if(feet > 2000  && feet <= 2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)


