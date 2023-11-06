function solution(land) {
    while(land.length > 1) {
        let landQueue = land.pop()
        
        for(let i=0; i<4; i++){
            let item = landQueue.shift();
            let max = Math.max(...landQueue)
            landQueue.push(item)    
            land[land.length-1][i] += max
        }
    }
    return Math.max(...land[0]);
}

