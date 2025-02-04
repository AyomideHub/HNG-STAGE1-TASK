const isPerfect = (num) => {
	num = Math.abs(num)
	let sum = 0
	for (let i = 1; i < num; i++){
		if ( num % i  === 0){
			sum += i
		}
	}

	if (sum === num ){
		return true
	} else{
		return false
	}
}

module.exports = { isPerfect}