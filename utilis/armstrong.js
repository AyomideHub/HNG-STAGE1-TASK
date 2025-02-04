const armstrong = (num) => {
	num = Math.abs(num)
	const numString = num.toString().split("")
	const numInt = numString.map( (num) => Number(num))
	const power = Number(numInt.length)
	const armstrong = numInt.reduce((sum, digit) => sum + Math.pow(digit, power) , 0 )

	if (armstrong === num){
		
		return true
	} else{
		return false
	}
	
}


const numProperties = (num) => {
	num = Math.abs(num)
	const properties = []

	if  (armstrong(num)){
		properties.push("armstrong")
	}

	if (num % 2 === 0){
		properties.push("even")
	} else (
		properties.push("odd")
	)

	return properties
}


module.exports = { numProperties}