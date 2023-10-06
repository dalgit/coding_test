function solution(n, left, right) {
    let arr = [];
    
    for(let i=left; i<=right; i++){
        let row = Math.floor(i/n)+1;
        let col = (i % n)+1;
        let val = Math.max(row,col);
        
        arr.push(val)
    }
    
    return arr
}