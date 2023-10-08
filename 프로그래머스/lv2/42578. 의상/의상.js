function solution(clothes) {
    const clothesMap = {}
    
    clothes.forEach(([_,type])=>{
        clothesMap[type] = (clothesMap[type] || 0) + 1
    })
    
    const totalCases = Object.values(clothesMap).reduce((acc,cur)=> acc * (cur+1), 1)
    
    return totalCases-1
}