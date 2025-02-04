function digitSum(n) {
	const str = Math.abs(n).toString(); 
	let sum = 0;
	for (let i = 0; i < str.length; i++) {
	  sum += parseInt(str[i]) ; 
	  
	}
	return (n < 0 ? -sum : sum)
  }

module.exports = {digitSum}