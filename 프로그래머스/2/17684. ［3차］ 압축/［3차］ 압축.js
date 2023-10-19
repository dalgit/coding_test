function solution(msg) {
    let pairs = Array.from({length:26}, (v,i)=>[String.fromCharCode(i+65),i+1])
    let dicMap = new Map(pairs)
    let answer = []
    let w=''
    
    for(let c of msg) {        
        if(dicMap.has(w+c)) {
            w=w+c
        } else {
            dicMap.set(w+c,dicMap.size+1)
            answer.push(dicMap.get(w))
            w=c
        }
    }
    
    return [...answer, dicMap.get(w)]
}