function solution(tickets) {
    let ticketsMap = {};
    let routes = ["ICN"];
    let flag = 0;
    
    tickets.forEach(([from,to])=>{
        if(!ticketsMap[from]) ticketsMap[from] = []
        ticketsMap[from].push(to)
    })
    
    for(let from in ticketsMap){
        ticketsMap[from].sort((a,b)=> a.localeCompare(b))
    }
    
    function dfs(from) {
        if(routes.length===tickets.length+1) return flag=1;
        if(!ticketsMap[from]) return;

        for(let i=0; i<ticketsMap[from].length; i++){
            let to = ticketsMap[from][i]
            if(to) {
                ticketsMap[from][i] = null;
                routes.push(to);
                dfs(to)
                if(flag) break;
                ticketsMap[from][i] = to;
                routes.pop();
            }
        }
    }
    
    dfs("ICN")
    return routes
}