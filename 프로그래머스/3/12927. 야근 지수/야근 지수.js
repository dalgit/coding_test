function solution(n, works) {
    works.sort((a,b)=>b-a);
    
    let max=works[0]-1;
    let i=0;
    
    while(n>0){
        if(max<0){
            return 0
        }
        
        if(works[i]<=max || i>works.length-1){
            i=-1;
            max--;
        }
        
        while(works[i]>max){
            works[i] = works[i]-1;
            n--;
        }

        i++
    }
    
    return works.reduce((acc,cur)=>acc + cur*cur,0);
}