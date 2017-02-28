


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




var arr = []; 

var arrayNumb = +prompt('введите количество имен', '');
for (i = 0; i < arrayNumb; i++){
arr.push ( prompt('Enter names', '') ); 
}

var userName = prompt('Enter your name', '');  
    
for (var i = 0; i < arr.length; i++) {
 if (userName == arr[i]){
 var succesLogin = true;
 var login = arr[i];
 } 
}

 if (succesLogin == true) {
 alert(login + ', ' + ' ' + 'Вы успешно вошли');
} else {
  alert('Имя - ' + userName + ' ' + 'не существует.');
}

