function solution(n) {
    if(n===1) return 1;
    let [lt, rt] = [1, 2];
   
    while(--n > 1) {
        [lt, rt] = [rt, (lt+rt) % 1000000007]
    }

    return rt;
}