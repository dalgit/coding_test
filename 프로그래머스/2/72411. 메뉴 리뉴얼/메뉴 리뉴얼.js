function solution(orders, courses) {
    orders = orders.map((order)=> order.split('').sort().join(''))
    let check = new Set();
    let orderMap = new Map(Array.from(courses, (v)=> [v, {}]));
    let course = ''
    
    function dfs (orderI, charI, length) {
        let currentOrder = orders[orderI]
        if(course.length === length) {
            let lengthMap = orderMap.get(length);
            return lengthMap[course] = (lengthMap[course] || 0) + 1;
        };
        
        for(let i=charI; i<currentOrder.length; i++){
            if(check.has(i)) return;
            check.add(i);
            course += currentOrder[i];
            dfs(orderI, i+1, length);
            check.delete(i);
            course = course.slice(0,-1)
        }
    }
    
    for(let orderI=0; orderI<orders.length; orderI++) {
        courses.forEach((courselength)=>{
            dfs(orderI, 0, courselength)
        })
    }

    let notSortedAnswer = [];
    
    for(let [_, value] of orderMap) {
        let maxCount = Number.MIN_SAFE_INTEGER;
        let maxOrders = [];
        
        for(let [course, count] of Object.entries(value)) {
            if(count > maxCount) {
                
                maxCount = count;
                maxOrders = [course];
            } else if (count === maxCount) {
                maxOrders.push(course)
            }
        }
        
        if(maxCount > 1) {
            notSortedAnswer.push(...maxOrders)
        }
    }
    
    return notSortedAnswer.sort();
}