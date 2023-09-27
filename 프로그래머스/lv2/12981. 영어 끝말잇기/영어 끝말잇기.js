function solution(n, words) {
    const arr = []
    let lastChar = words[0][0]
    let count = 0
    
    for(let i of words){
        count ++;

        if((lastChar === i[0]) && !arr.includes(i)) {
                arr.push(i)
                lastChar = i[i.length-1]
        } else {
            let gameCount = Math.ceil(count/n)
            let wrongPerson = count % n || n
            return [wrongPerson, gameCount]
        }
    }

    return [0,0];
}