function solution(arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<arr2[0].length; i++){
        for(let j=0; j<arr1.length; j++){
            let sum = 0;
            
            for(let k=0; k<arr1[0].length; k++){
                sum += arr1[j][k] * arr2[k][i];
            }
            
            if(!answer[j]) answer[j] = []
            
            answer[j][i]=sum   
        }
    }
    
    return answer;
}