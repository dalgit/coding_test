function solution(want, number, discount) {  
    let sum=0;
    
    for(let i=0; i<=discount.length-10; i++){
        let arr=[...number]
        
        for(let j=i; j<i+10; j++){
            let idx=want.indexOf(discount[j])
            arr[idx] = arr[idx]-1;
            
            if(idx===-1 || arr[idx]<0){
                break;
            }
        }
        if(arr.every((v)=>v===0)) sum++;
    }
    return sum;
}