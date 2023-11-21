function solution(sequence, k) {
    let sum = 0;
    let lt = 0;
    let map = {};
    let [pLt, pRt] = [0, Number.MAX_SAFE_INTEGER];
    
    sequence.forEach((v,rt)=>{
        sum += v;
        map[rt] = v;
        
        while(sum>k) {
            sum -= map[lt++];
        }
        
        if(sum === k && (rt - lt) < (pRt - pLt)) {
            [pLt, pRt] = [lt, rt];
        }
    })
    
    return [pLt, pRt];
}