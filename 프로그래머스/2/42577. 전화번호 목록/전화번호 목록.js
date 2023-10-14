function solution(phone_book) {
    let phoneMap = {};
    
    phone_book.forEach((phone)=>phoneMap[phone]=true);
    
    for(let phone of phone_book){
        while(phone.length>1){
            phone=phone.slice(0,-1);
            if(phoneMap[phone]) return false;
        }        
    }
    
    return true;
}