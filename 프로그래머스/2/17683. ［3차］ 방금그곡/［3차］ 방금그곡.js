function solution(m, musicinfos) {
    let totalUnits = m.split('').filter((v)=> v !== "#").length;
    let result = {title: "", duration : 0};
    
    function calTimeDiff (st, ed){
        function totalMinutes (t) {
            let [h, m] = t.split(':').map(Number);
            return (h * 60) + m;
        }
        return totalMinutes(ed) - totalMinutes(st);
    }
    
    musicinfos.forEach((info)=>{
        let [st, ed, title, units] = info.split(',');
        let duration = calTimeDiff(st, ed);
        let currentUnits = '';
        let unitMap = [];
        units.split('').forEach((unit, i)=>{
            if(unit === "#") {
                unitMap[unitMap.length-1] += "#"
            } else {
                unitMap.push(unit)
            }
        })
        
        for (let i=0; i<duration; i++) {
            let currentI = i % unitMap.length;
            currentUnits += unitMap[currentI];
            
            if(i > totalUnits-1) {
                currentUnits = currentUnits.slice(currentUnits[1] === "#" ? 2 : 1);
            }

            if(m === currentUnits) {
                if(duration > result.duration) {
                    result = {title, duration};
                }
                break;
            }
        }
    })
    
    return result.title || "(None)"
}