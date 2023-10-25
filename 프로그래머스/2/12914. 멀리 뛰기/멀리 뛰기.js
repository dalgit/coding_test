function solution(n) {
    let methods = Array(n+1).fill(1)
    
    for(let i=2; i<methods.length; i++){
        methods[i] = (methods[i-1] + methods[i-2]) % 1234567 
    }
    
    return methods[n]
    
}
