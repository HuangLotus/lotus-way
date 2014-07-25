function factorial(num){
	if(num <=0){
		return 1;
	}else{
		return num*arguments.callee(num -1);
	}
}
console.log(factorial(4));




foo = function(){
	this.myName = "Foo function.";
}
foo.prototype.sayHello = function(){
	//alert(this.myName);
}
foo.prototype.bar = function(){
	//setTimeout(this.sayHello, 1000);
	this.sayHello();
	//var self = this;
	//setTimeout(this.sayHello.call(this),1000);
}
var f = new foo;
f.bar();

function getEleByClassName(cname){
	var ele = document.getElementsByTagName('div'),
		len =  ele.length,
		result = [],
		j = 0;
	for(var i=0;i<len;i++){
		if(ele[i].className.match(RegExp('(\\s|^)'+cname+'(\\s|$)')) ){
			result[j] = ele[i];j++;
		}
	}
	return result;
}
console.log(getEleByClassName('c1'));
