function solution(files) {
    let map = {};
    
    files.sort((a,b)=>{
        if(!map[a]) mapping(a)
        if(!map[b]) mapping(b)
        let [ma, mb] = [map[a], map[b]]
        
        
        let headDiff = (ma.head).localeCompare(mb.head);
        
        if(headDiff !== 0){
            return headDiff;
        } 
        
        return ma.number - mb.number;
    })
    
    function mapping(str) {
        let [i, head, number] = [0, '', '']
        map[str] = {};

        while(isNaN(parseFloat(str[i]))) {
            head += str[i++];
        }
        map[str].head = head.toLowerCase();
        
        while(i < str.length && !isNaN(parseFloat(str[i])) && number.length<5) {
            number += str[i++];
        }
        map[str].number = Number(number)
    }
    
    return files;
}