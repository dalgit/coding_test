function solution(maps) {
    let check = Array.from(maps, (map)=> Array(map.length).fill(false));
    let [row, col] = [maps.length, maps[0].length];
    let result = [];
    let count = 0;
    
    function helper(x, y) {
        check[y][x] = true;
        
        if(maps[y][x] !== 'X') {
            count += Number(maps[y][x]);
            
            for(let [nx,ny] of [[x,y-1], [x+1,y], [x,y+1], [x-1,y]]) {
                if(nx>=0 && ny>=0 && nx<col && ny<row && !check[ny][nx]) {
                    helper(nx,ny);
                }
            }       
        }
    }
    
    for(let y=0; y<row; y++){
        for(let x=0; x<col; x++){
            if(!check[y][x]) {
                helper(x,y);

                if(count) {
                    result.push(count);
                    count = 0;
                }
            }
        }
    }
    
    return result.length ? result.sort((a,b)=>a-b) : [-1];
}