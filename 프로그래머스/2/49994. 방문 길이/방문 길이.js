function solution(dirs) {
    let current = [0,0];
    let pathSet = new Set();
    
    for(let dir of dirs){
        let {axis, val} = dirPairs[dir];
        let nextPath = [...current];
        nextPath[axis] += val;
        
        if(nextPath[axis]<=5 && nextPath[axis]>=-5) {
            let orgPath = [current, ...nextPath].toString()
            let revPath = [nextPath, ...current].toString()

            if([orgPath, revPath].every((v)=> !pathSet.has(v))) {
                pathSet.add(orgPath)
            }
            
            current = nextPath;
        }
    }
    return pathSet.size;
}

const dirPairs = {
    U : { axis : 1, val : 1},
    D : { axis : 1, val : -1},
    R : { axis : 0, val : 1},
    L : { axis : 0, val : -1}
}