function solution(k, dungeons) {
    let max = 0;
    let check = new Set()
    
    function dfs(reminder, count){
        for(let i=0; i<dungeons.length; i++){
            let [need, use] = dungeons[i]
            
            if(reminder >= need && !check.has(i)) {
                check.add(i)
                dfs(reminder-use, count+1)
                check.delete(i)
            }
        }
        
        max = Math.max(max, count)
    }

    dfs(k, 0);
    return max;
}