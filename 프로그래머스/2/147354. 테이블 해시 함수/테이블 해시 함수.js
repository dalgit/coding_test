function solution(data, col, row_begin, row_end) {
    let result = 0;
    
    data.sort((a,b)=>{
        let diff = a[col-1] - b[col-1];
        return diff || (b[0] - a[0]);
    })
    
    for(let i=row_begin; i<=row_end; i++) {
        result ^= data[i-1].reduce((acc,cur)=> acc + (cur % i), 0)
    }

    return result;
}