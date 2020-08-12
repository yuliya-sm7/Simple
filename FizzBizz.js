for(let i = 1; i < 101; i++){
	let str = ""
	if(!(i%3)){
    	str += "Fizz"
    }
    if(!(i%5)) {
    	str += "Bizz"
    }
    if (!str) {
    	str += i
    }
    document.getElementById("demo").innerText += str + '\n'
}