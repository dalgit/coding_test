function solution(w, h) {
    function getGcd(a, b) {
        while(b > 0) {
            let r = a % b;
            [a, b] = [b, r];
        }
        return a;
    }
    
    let gcd = getGcd(w,h);
    let [mW, mH] = [w/gcd, h/gcd]
    let count = 0;
    
    for(let i=1; i<=mW; i++) {
        let [lt, rt] = [(i-1)*(mH/mW), i*(mH/mW)];
        count += Math.ceil(rt) - Math.floor(lt);
    }
    
    return (w*h) - (count * (w/mW));
}
