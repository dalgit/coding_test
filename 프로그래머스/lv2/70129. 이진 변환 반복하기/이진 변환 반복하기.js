function solution(s) {
    let convertedCount = 0;
    let deletedZeros = 0;
    
    while(s !== "1") {
        convertedCount++;
        
        const oneCount = s.split("").filter((str)=> str === "1").length
        deletedZeros += s.length - oneCount
        
        s = oneCount.toString(2)
    }
    
    return [convertedCount, deletedZeros];
}
