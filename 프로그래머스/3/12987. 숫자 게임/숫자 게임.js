function solution(A, B) {
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>a-b)
    let aIdx = 0;
    let score = 0;
    
    B.forEach((b)=>{
        if(b>A[aIdx]) {
            score++;
            aIdx++;
        }
    })
    return score;
}