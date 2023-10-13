function solution(genres, plays) {
    let map = {};
    let answer = [];
    let maxSong = 2;
    
    genres.forEach((genre,i)=>{
        let play = plays[i]
        
        if(!map[genre]) {
            map[genre] = {total:0, pairs:{}}
        }
        
        if(!map[genre].pairs[play]) {
            map[genre].pairs[play] = []
        }
        
        map[genre].total += play
        map[genre].pairs[play].push(i)
    })
    
    let pairs= Object.values(map).sort((a,b)=>b.total - a.total).map(({pairs})=>pairs)
    
    pairs.forEach((pair)=>{
        let entries = Object.entries(pair).sort(([total1],[total2])=>total2-total1)
        let idxsArr = entries.map(([play,idxs])=>idxs)
        let count = 0;
        
        for(idxs of idxsArr){
            if(idxs.length>1) idxs.sort((a,b)=>a-b)
            
            for(idx of idxs){
                if(count===maxSong) break;
                answer.push(idx);
                count++;
            }
            
            if(count===maxSong) break;
        }
    })
    
    return answer;
}