function solution(citations) {
    let hIndex = citations.length;

    for(let i=hIndex; i>=0; i--){
        if(citations.filter((citation)=>citation>=i).length>=i){
            hIndex=i;
            break;    
        }
    }

    return hIndex;
}