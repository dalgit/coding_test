function solution(people, limit) {
    people.sort((a,b)=>a-b);
    let boatCount = 0;

    let start = 0;
    let end = people.length-1;
    
    while(start<=end){
        if(people[start]+people[end]<=limit){
            start++
        }
        end--
        boatCount++;
    }

    return boatCount;
}