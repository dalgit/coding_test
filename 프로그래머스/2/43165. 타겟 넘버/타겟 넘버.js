function solution(numbers, target) {
    let count=0;
    
    function dfs(i,sum){
        if(i===numbers.length){
            count += sum === target;
        } else {
            dfs(i+1, sum+numbers[i]);
            dfs(i+1, sum-numbers[i]);
        }
    }
    
    dfs(0,0);
    return count;
}