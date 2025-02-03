const isPrime = num => {
    if (num <= 1) {
		return false;
	} else if (num === 2 || num === 3) {
		return true;
	}else if (num % 2 === 0 || num % 3 === 0){
		return false;
	}
	
	for (let i = 5; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
};

module.exports = {isPrime}
	