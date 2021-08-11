function distanceFromHqInBlocks(someValue){
    if(someValue <= '42'){
        return 42 - someValue
    }
    else{
        return someValue - 42
    }
}

function distanceFromHqInFeet(someValue){
    if(someValue <= '42'){
        return (42 - someValue) * 264
    }
    else{
        return (someValue - 42) * 264
    }
}

let distanceTravelledInFeet = function(firstDistance,secondDistance){
    if(firstDistance < secondDistance){
        return (secondDistance - firstDistance) * 264
    }else{
        return (firstDistance - secondDistance) * 264
    }
}

function calculatesFarePrice(distanceTravelledInFeet){
    if(distanceTravelledInFeet < '400'){
        return 0
    }else if((distanceTravelledInFeet < '2000') && (distanceTravelledInFeet > '400')){
        return (distanceTravelledInFeet * 2)
    }
}