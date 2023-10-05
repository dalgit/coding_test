function solution(elements) {
    let sumSet = new Set();
    let doubleArr= elements.concat(elements);
    
    for(let length=1; length<=elements.length; length++){
        for(let j=0; j<elements.length; j++){
            let sum = doubleArr.slice(j,j+length).reduce((acc,cur)=>acc+cur,0)
            sumSet.add(sum)
        }    
    }
    return sumSet.size
}