function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    let stack = [];
    
    numbers = numbers.map((v,i)=> ({v, i}))
    
    for(let number of numbers){
        while(number.v>stack[stack.length-1]?.v){
            let target = stack.pop();
            answer[target.i] = number.v;
        }
        stack.push(number)
    }
    return answer
}