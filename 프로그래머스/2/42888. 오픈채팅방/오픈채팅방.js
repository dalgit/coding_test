function solution(record) {
    let userMap = {};
    let userMsgs = [];
    
    record.forEach((v)=>{
        let [type, id, name] = v.split(' ');
        if(type === 'Change' || type === 'Enter'){
            userMap[id] = name
        }
        
        if(type !== 'Change') {
            userMsgs.push({id, type})
        }
    })
    
    return userMsgs.map(({id,type})=> userMap[id] + msgHelper(type))
}

function msgHelper(type) {
    switch(type){
        case 'Enter':
            return '님이 들어왔습니다.'
        case 'Leave':
            return '님이 나갔습니다.'
    }
}