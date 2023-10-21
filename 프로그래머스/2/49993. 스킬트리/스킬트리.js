function solution(skills, skill_trees) {
    let count=0;
    let skillMap = new Map(Array.from(skills, (v,i)=> [v,i]))
    
    for(let skillTree of skill_trees){
        let sIdx = 0;
        let flag = 1;
        
        for(let skill of skillTree){
            if(skillMap.has(skill)) {
                if(skillMap.get(skill) === sIdx) sIdx++;
                else {
                    flag = 0;
                    break;
                };
            }
        }
        
        count += flag
    }
    
    return count;
}