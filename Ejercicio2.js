function countPrimes(number) {
    let contado = 0;

    function Primos(num) {
        for(let i = 2; i <= num - 1; i++) {
        if(num % i == 0) {
            return false;
        }
        }
        return true;
    }

    for(let i = 1; i <= number; i++) {
        if(number != 0){
            if(Primos(i)) {
            if(i > 1){
                contado++
            }
            } else {
                continue
            }
        }else{
            contado = [];
        }
        
    }

    return contado 
}

module.exports = countPrimes;