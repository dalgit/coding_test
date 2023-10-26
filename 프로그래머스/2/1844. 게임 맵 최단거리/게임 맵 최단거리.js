function solution(maps) {
    let queue = [[0,0,1]];
    let dxdy = [[-1,0], [0,1], [1,0], [0,-1]];
    let xN = maps.length;
    let yN = maps[0].length;
    maps[0][0] = 0;
    
    
    while(queue.length>0){
        let [x,y,count] = queue.shift();
        if(x===xN-1 && y===yN-1) return count;
        
        for(let [dx,dy] of dxdy){
            let nextX = x + dx;
            let nextY = y + dy;
            
            if(nextX >=0 && nextX < xN && nextY >=0 && nextY < yN && maps[nextX][nextY]){
                queue.push([nextX, nextY, count+1])
                maps[nextX][nextY] = 0
            }
        }
    }
    
    return -1;
}
