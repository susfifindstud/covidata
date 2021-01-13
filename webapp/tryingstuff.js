var s = 1
var i = 0.03
var r = 0
var t = 0

function sayHello(){
	console.log('hello');
}

function increment(){
	s = s - 0.5 * s * i
	r = r + 0.1 * i
	i =  i + 0.5 * s * i - 0.1 * i
}

function values(time){
	for (t = 0; t < time; t++){
		increment()
	}
}

alert('hello world');