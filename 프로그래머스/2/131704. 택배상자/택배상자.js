function solution(orders) {
    let main = Array.from(Array(orders.length), (_,i)=> orders.length - i);
    let sub = [];
    let subCheck = new Set();
    let count = 0;
    
    for(let order of orders) {
        while(true) {
            if(sub[sub.length-1] === order) {
                let box = sub.pop();
                subCheck.delete(box);
                count ++;
                break;
            } 
            
            if(main[main.length-1] === order) {
                main.pop();
                count ++;
                break;
            }
            
            if(!subCheck.has(order)){
                let box = main.pop()
                sub.push(box);
                subCheck.add(box);
                continue;
            }
                
            return count;
        }
    }
    
    return count;
}
