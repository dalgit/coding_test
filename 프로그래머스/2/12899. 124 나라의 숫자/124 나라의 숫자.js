function solution(n) {
    let N =''
    
    while(n>0){
        let remainder = n % 3;
        n = Math.floor(n/3);
        N = (remainder || 4) + N;
        
        if(!remainder) {
            n--;
        }
    }
    
    return N
}

