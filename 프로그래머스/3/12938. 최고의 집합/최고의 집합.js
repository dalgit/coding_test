function solution(n, s) {
    let quo = Math.floor(s/n);
    if(!quo) return [-1];
    
    let rem = s % n;
    let answer = Array(n).fill(quo)
    
    for(let i=answer.length-rem; i<answer.length; i++) {
        answer[i] ++;
    }
    
    return answer
}