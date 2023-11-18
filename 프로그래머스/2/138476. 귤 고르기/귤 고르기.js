function solution(k, tangerine) {
    const counts = {}
    let sum = 0
    
    tangerine.forEach((a)=>{
        if(counts[a]) counts[a]++
        else counts[a] =1
    })
    
    const sortedCounts = Object.values(counts).sort((a,b)=>b-a)

    for(let i=0; i<sortedCounts.length; i++){
        sum += sortedCounts[i]
        
        if(sum>=k){
            return i+1
        }
    }
    
    return sortedCounts.length
}
