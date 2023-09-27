function solution(s){
    let count = 0
    
    if(s.length % 2 !== 0){
        return false
    }
    
    for(let char of s){
        if(char === "("){
            count++
        } else {
            count--
        }
        if(count<0){
            break;
        }
    }
    
    return count === 0
}