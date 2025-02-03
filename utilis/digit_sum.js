const digitSum = (num) => {
	num = num.toString()
	let digit = num.split("")

	const sum = digit.reduce((acc, numb) => acc + Number(numb), 0)
	return sum
}

module.exports = {digitSum}