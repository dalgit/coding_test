function solution(n) {
    const count = helper(n)
    
    while(true){
        n++;
        if(count === helper(n)){
            break;
        }
    }
    
    return n;
}
    
function helper(number) {
    const convertedN = number.toString(2)
    const count = convertedN.split('').filter((i)=>i==="1").length
    return count
}