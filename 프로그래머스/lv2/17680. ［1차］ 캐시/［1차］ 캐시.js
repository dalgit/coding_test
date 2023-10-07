function solution(cacheSize, cities) {
    if(cacheSize===0) return cities.length*5;
    
    let cache= [];
    let time= 0;
    
    cities.forEach((v,i)=>{
        let V= v.toUpperCase()
        cache.push(V)
        
        if(cache.indexOf(V)===cache.lastIndexOf(V)){
            time += 5;
            
            if(cache.length>cacheSize){
                cache.shift()
            }
        } else {
            cache.splice(cache.indexOf(V),1);
            time += 1;
        }
    })
    
    return time;
}