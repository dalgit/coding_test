function solution(numbers) {
    let sortedNumbers = numbers.sort((a,b)=>{
        [a,b] = [a.toString(), b.toString()]
        return (b+a) - (a+b)
    }).join('')
    
    return sortedNumbers[0] === '0' ? '0' : sortedNumbers
}