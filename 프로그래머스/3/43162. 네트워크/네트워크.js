function solution(n, computers) {
    let count = 0;
    let checks = Array(n).fill(0)
    
    function dfs(computerI){
        checks[computerI] = 1;
        
        for(let connectI=0; connectI<n; connectI++){
            if(computers[computerI][connectI] && !checks[connectI]) {
                dfs(connectI)
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!checks[i]) {
            dfs(i);
            count++;
        }
    }
    
    return count;
}