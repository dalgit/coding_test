function solution(n, stations, w) {
    let coverage = (w * 2) + 1;
    let nonCoverageStart = 1;
    let needStations = 0;
    
    stations.forEach((station)=>{
        let coverageStart = station-w;
        let nonCoverage = coverageStart - nonCoverageStart;
        
        if(nonCoverage > 0) {
            needStations += Math.ceil(nonCoverage/coverage);
        }
        nonCoverageStart = station + w + 1;
    })
    
    if(nonCoverageStart <= n) {
        needStations += Math.ceil((n-nonCoverageStart+1)/coverage);
    }

    return needStations
}