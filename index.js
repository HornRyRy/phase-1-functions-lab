function distanceFromHqInBlocks(pickUpLoc){
    return Math.abs(42-pickUpLoc)
}

function distanceFromHqInFeet(streetLoc){
    //each block is 264 feet
    let distBlocks = Math.abs(42-streetLoc)
    return distBlocks * 264
}

function distanceTravelledInFeet(startBlockNo, endBlockNo){
    let distBlocks = Math.abs(startBlockNo - endBlockNo)
    return distBlocks * 264
}


function calculatesFarePrice(start, destination){

    let distBlocks = Math.abs(start - destination)
    let distFeet = distBlocks * 264
    let distFeetOverFourHun = distFeet - 400
    
    
    if(distFeet <= 400){
        return 0
    }
    if(distFeet >= 2500){
        return 'cannot travel that far'
    }
    if(distFeet > 400 && distFeet < 2000){
        return 0.02 * distFeetOverFourHun
    }
    if(distFeet >= 2000 && distFeet < 2500 ){
        return 25
    }
    

}



