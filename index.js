
// distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.
const headquarterNum = 42;
const freeFeet = 400;

function distanceFromHqInBlocks(streetNum){
    let distance = streetNum - headquarterNum;
    return Math.abs(distance);
}

function distanceFromHqInFeet(streetNum) {
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    numberOfBlocks = distanceFromHqInBlocks(streetNum);
    return numberOfBlocks * 264;
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(begin_block, destination_block){
    numberOfBlocksTravelled = Math.abs(destination_block - begin_block);
    return numberOfBlocksTravelled * 264;
    //return number of block travelled
}

function calculatesFarePrice(start, destination){
    const numberInFeet = distanceTravelledInFeet(start,destination);
    if (numberInFeet <= freeFeet){
            return 0;
        }else if (numberInFeet >= 400 && numberInFeet <= 2000) {
            return Price = (numberInFeet - freeFeet) * 0.02;
        } else if  (numberInFeet > 2000 && numberInFeet < 2500) {
            return 25;
        } else {
            return "cannot travel that far";
        }
    }
