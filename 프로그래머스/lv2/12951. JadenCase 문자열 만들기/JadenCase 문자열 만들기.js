function solution(s) {
    let answer = s.split(' ').map((str)=>{
        return str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase()
    })
    return answer.join(" ");
}