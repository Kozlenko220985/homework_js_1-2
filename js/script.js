var a = prompt ("введите число" , 1);
var n = prompt ("введите степень" , 1);

function pow(a, n) {
    var b = a;
 
    for (var i = 1; i < n; i++) {
        b *= a;
    }
 
    return b;
}
 
alert(pow(a, n));


var arr = ['Рома', 'Андрей', 'Эдуард', 'Кирил', 'Константин'];

var a = prompt("Enter your name");

for (var i = 0; i < arr.length; i++){
	if (a == arr[i]) {
      alert( a + " вы успешно вошли! ");
      break;
    } else{
      alert("Ошибка")
      break;
    }
}



