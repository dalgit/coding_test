function solution(progresses, speeds) {
    let maxProgressDays = Math.ceil((100-progresses[0])/speeds[0]);
    let count = 0;
    let answer = [];
    
    for(let i=0; i<progresses.length; i++){
        let progressDays = Math.ceil((100-progresses[i])/speeds[i])   

        if(progressDays>maxProgressDays) {
            answer.push(count)
            count = 0;
            maxProgressDays = progressDays;
        }
        
        count++; 
    }
    
    return answer.concat(count);
}