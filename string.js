function inverte(str) {
    var reversedStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

//exemplo
var str = "Oi";
var strInvertida = inverte(str);
console.log(strInvertida);