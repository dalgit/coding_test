function solution(n) {
    let arr = [0,1];
    let cur = 2;
    
    while(cur!==n){
        cur++;
        arr.push((arr[0]+arr[1])%1234567)
        arr.shift()
    }
    
    return (arr[0]+arr[1])%1234567;
}