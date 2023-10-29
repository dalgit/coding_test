function solution(routes) {
    routes.sort(([st1,ed1],[st2,ed2])=>ed2-ed1)
    let [_,ed] = routes.pop();
    let count = 1;
    
    while(routes.length) {
        let [currentSt, currentEd] = routes.pop();
        if(ed<currentSt) {
            ed = currentEd;
            count ++;
        }
    }
    
    return count;
}