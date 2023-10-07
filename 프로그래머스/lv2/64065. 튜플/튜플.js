function solution(s) {
    let numberMap = {};
    let numberStr= '';
    let answer= [];
    
    for(let i=0; i<s.length; i++){
        if(!isNaN(s[i])){
            numberStr += s[i];
        } else if(numberStr!==''){
            numberMap[numberStr] = (numberMap[numberStr] || 0) +1
            numberStr=''
        }
    }
    
    return Object.entries(numberMap).sort((a,b)=>b[1]-a[1]).map(([k,v])=>Number(k))
}