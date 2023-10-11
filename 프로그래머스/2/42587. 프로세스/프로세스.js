function solution(priorities, location) {
    let runCount = 0;
    
    while(priorities.length>=0){
        let maxPriority = Math.max(...priorities)
        let currentPriority = priorities.shift()
        
        if(currentPriority === maxPriority) {
            runCount++;            
            if(location === 0) break;
        } else {
            priorities.push(currentPriority)
        }
        
        location = (location || priorities.length) -1
    }

    return runCount;
}