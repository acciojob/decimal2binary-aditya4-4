function decimalToBinary(num) {
  // Write your code here
	let binary = "";
	while(num > 0){
		if(num % 2 == 1){
			binary += "1";
		}
		else{
			binary += "0"
		}
		num = Math.floor(num / 2);
	}
	return binary.split("").reverse().join("");
}

window.decimalToBinary = decimalToBinary;