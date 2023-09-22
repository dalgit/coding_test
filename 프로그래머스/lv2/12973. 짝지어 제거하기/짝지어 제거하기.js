function solution(s)
{
    const arr = []
    
    for(let char of s){
        if(arr.length !==0){
            if(arr[arr.length-1] === char){
                arr.pop()
                continue;
            }
        }
        
        arr.push(char)
    }

    return arr.length===0 ? 1 : 0;
}