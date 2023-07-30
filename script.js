// complete the given function

function palindrome(str){
	const cleanedString=str.toLowerCase().replace(/[^a-z0-9]/g, '');
	return cleanedString === cleanedString.split('').reverse().join('');

}
module.exports = palindrome
