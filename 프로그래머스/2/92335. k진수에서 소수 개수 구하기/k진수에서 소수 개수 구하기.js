function solution(n, k) {
    n = (n).toString(k);
    
    function isPrime(n) {
        if(n===1) return false;
        for(let i=2; i<=Math.sqrt(n); i++) {
            if(n % i === 0) return false;
        }
        return true;
    }
    
    return n.split('0').filter((strN)=>{
        return strN !== '' && isPrime(Number(strN))
    }).length
}