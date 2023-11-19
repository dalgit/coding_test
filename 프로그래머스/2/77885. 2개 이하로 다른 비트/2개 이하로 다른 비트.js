function solution(numbers) {
    return numbers.map((number)=>{
        if(number % 2 === 0) return number+1;
        else{
            let bin = '0' + number.toString(2);
            let l0 = bin.lastIndexOf('0');
            let n1 = l0 + 1;
            
            let newBin = bin.slice(0, l0) + '10' + bin.slice(n1 + 1);
            
            return parseInt(newBin, 2)
        }
    })
}