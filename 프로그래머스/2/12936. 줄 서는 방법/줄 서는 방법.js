function solution(n, k) {
    let upToN = Array.from({length:n}, (_,i)=> i+1);
    let nFac = upToN.reduce((acc,cur)=>acc*cur,1);
    let result = [];
    
   while(n > 0) {
        let unit = nFac / n;
        let position = Math.ceil((k % nFac)/unit)-1;
        let [num] = upToN.splice(position, 1);
        result.push(num);
        nFac /= n--;
    }
    
    return result
}