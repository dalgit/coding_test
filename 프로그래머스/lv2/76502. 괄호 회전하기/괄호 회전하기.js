function solution(s) {
    let count = 0;

    for(let i=0; i<s.length; i++){
        let pass = true;
        const stack = [];
        
        for(let j=i; j<s.length+i; j++){
            let k = j % s.length

            if(s[k]==="["||s[k]==="("||s[k]==="{"){
                stack.push(s[k])
            } else if(helper(stack[stack.length-1],s[k])){
                    stack.pop()
            } else {
                pass=false;
                break;
            }
        }
        
        count += stack.length=== 0 && pass
    }
    
    return count;
}

function helper(str1, str2){
    const pairs = {
        "}" :"{",
        ")" : "(",
        "]" : "["
    }
    
    return str1 === pairs[str2] 

}