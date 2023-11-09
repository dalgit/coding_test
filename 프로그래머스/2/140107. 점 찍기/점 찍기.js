function solution(k, d) {
    let count = 0;
    let possibleD = d - (d % k);
    
    for(let x=0; x<=d; x=x+k){
        count ++;
        for(let y=possibleD; y>0; y=y-k){
            if(Math.sqrt((x*x)+(y*y)) <= d) {
                count += Math.ceil(y/k);
                possibleD = y;
                break;
            }
        }
    }

    return count;
}