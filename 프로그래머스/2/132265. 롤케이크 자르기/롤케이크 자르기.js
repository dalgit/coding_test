function solution(topping) {
    let toppings1 = new Map();
    let toppings2 = new Map();
    let count = 0;
    
    topping.forEach((v)=>{
        toppings1.set(v, (toppings1.get(v) || 0)+1);
    })
    
    topping.forEach((v)=>{
        let [toppings1V, toppings2V] = [toppings1.get(v), toppings2.get(v) || 0]
        toppings1.set(v, toppings1V - 1);
        toppings2.set(v, toppings2V + 1);
        
        if(toppings1V===1) {
            toppings1.delete(v)
        }
        
        if(toppings1.size === toppings2.size) {
            count++;
        }
    })
    
    
    return count;
}