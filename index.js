function distanceFromHqInBlocks(someValue){
    if(someValue <= 42){
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

function distanceTravelledInFeet(firstDistance,secondDistance){
    if(firstDistance < secondDistance){
        return (secondDistance - firstDistance) * 264
    }else{
        return (firstDistance - secondDistance) * 264
    }
}

function calculatesFarePrice(firstDistance, secondDistance){
    const distance = distanceTravelledInFeet(firstDistance, secondDistance)
    if(distance < 400){
        return 0
    }else if(distance <= 2000 && distance > 400){
        return (distance - 400) * .02
    }else if(distance <= 2500 && distance > 2000){
        return 25
    }else{
        return 'cannot travel that far'
    }
}