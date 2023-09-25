function solution(s) {
    const arr = s.split(' ').sort((a,b)=>{
        return a-b
    })
    
    const answer = arr[0] + " " + arr[arr.length-1]
    
    return answer
}