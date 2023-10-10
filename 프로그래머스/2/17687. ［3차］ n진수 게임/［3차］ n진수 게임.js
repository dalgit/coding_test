function solution(n, t, m, p) {
    let count=0;
    let answer='';
    let i=0;
    
    while(answer.length<t){
        let number = i.toString(n)
        
        for(let digit of number){
            count++;
            if((count%m || m)===p) {
                answer += digit
            }
            
            if(answer.length>=t) break;
        }
        
        i++;
    }

    return answer.toUpperCase();
}