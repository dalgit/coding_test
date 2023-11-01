function solution(x, y, n) {
    if(x===y) return 0;
    let queue = [[y,0]];
    let checkSet = new Set();
    
    while(queue.length){
        let [y, count] = queue.shift();
        let operations = [y-n]
        
        if(y%2 === 0) operations.push(y/2)
        if(y%3 === 0) operations.push(y/3)
        
        for(let Y of operations) {
            if(x===Y) return count + 1;
            if(x > Y || checkSet.has(Y)) continue;
            
            queue.push([Y, count+1])
            checkSet.add(Y)
        }
    }
    
    return -1;
}