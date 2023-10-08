function solution(fees, records) {
    let timeMap= {}
    let answer= []
    
    records.forEach((record)=>{
        let [time, carNum] = record.split(' ');
        
        if(!timeMap[carNum]) timeMap[carNum] = []
        
        timeMap[carNum].push(time)
    })

    Object.keys(timeMap).sort((a,b)=>a-b).forEach((carNum)=>{
        let times = timeMap[carNum];
        let totalMinutes = 0;

        for(let i=0; i<times.length; i+=2){
            totalMinutes += calTimeDifference(times[i], times[i+1] ?? '23:59')
        }
        
        answer.push(calParkingFee(totalMinutes, fees))
    })
    
    return answer
}

function calTimeDifference(a,b){
    let [aHour, aMinute] = a.split(':');
    let [bHour, bMinute] = b.split(':');
    
    let aMinutes = totalMinutes(aHour, aMinute)
    let bMinutes = totalMinutes(bHour, bMinute)
    return bMinutes-aMinutes;
}

function totalMinutes(hour,minutes){
    return (hour*60) + Number(minutes)
}

function calParkingFee(minutes, fees){
    let [basicMinutes, basicFee, unitMinutes, unitFee] = fees;
    
    if(minutes<=basicMinutes){
        return basicFee
    } else {
        return basicFee + Math.ceil((minutes-basicMinutes)/unitMinutes) * unitFee
    }
}

