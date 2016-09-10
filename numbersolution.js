for(var i = 11; i <= 99; i += 11){
	alert("i = " + i);
}

if( i == 99){
i + 12;
}

for(var i = 111; i <= 999; i +=111){
	alert("i = "+ i);
}

if( i == 999){
i + 112;
}

for(var i = 1111; i <= 9999; i += 1111){
	alert("i = "+ i);
} 


// or
var a = 10;
var increment;
while (a < 10000) {
	a++;
	increment = a;
	for(var b = 0; b < 9; b++){
		console.log(a);
		a += increment;
	}
}