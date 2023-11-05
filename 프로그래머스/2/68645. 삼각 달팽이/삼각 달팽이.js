function solution(n) {
    let total = (1+n)*n/2;
    let arrs = Array.from(Array(n), (_, i)=> Array(i+1).fill(0));
    
    let num = 0;
    let dv = 0;

    while(num < total) {
        let h = arrs.length-1;
        let top = dv * 2;
        
        for(let y = top; y<=h-dv; y++) {
            arrs[y][dv] = ++num;
        }
        
        for(let x = dv+1; x<arrs[h-dv].length-dv; x++) {
            arrs[h-dv][x] = ++num;
        }
        
        for(let y = h-dv-1; y > top; y--) {
            let x = arrs[y].length-1-dv;
            arrs[y][x] = ++num;
        }
        dv++;
    }

    return arrs.reduce((acc,cur)=> acc.concat(cur), []);
}
