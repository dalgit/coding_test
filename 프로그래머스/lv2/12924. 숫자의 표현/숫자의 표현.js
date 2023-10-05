function solution(n) {
    let answer = 1;

    for(let i=1; i<=n/2; i++){
        let sum = i;
        
        for(let j=i+1; j<n; j++){
            sum += j
            if(sum===n){
                answer ++;
            }
            
            if (sum>=n){
                break;
            }
        }
    }

    return answer;
}