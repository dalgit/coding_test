function solution(operations) {
    let queue = [];
    
    operations.forEach((v)=>{
        let [oper, num] = v.split(' ');
        num = Number(num);
        
        if(oper === "D") {
            if(num > 0) {
                queue.pop();
            } else {
                queue.shift();
            }
        } else {
            queue.push(num);
            queue.sort((a,b)=>a-b);
        }
    })

    return queue.length ? [queue[queue.length-1], queue[0]] : [0,0];
}