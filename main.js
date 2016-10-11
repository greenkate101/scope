// exercise 1.1

var a = 2;
function pow (x, n) {
    var a = x;
    for (var i = 1; i < n; i++) {
        a *= x;
    }
    return a;
}
// add the var
pow(3, a);
pow(2, a);

// exercise 1.2

var i = 0;

var logNTimes = function (str, n) {
    var i = 0; 
    while (i < n) {
        console.log(str);
        i++;
    }
};

while (i < 3) {
    logNTimes('Work', 2);
    i++;
}

// add var to i = 0 so it doesnt leak

// Exercise 1.3

(function () {
    var url = 'http://openweathermap.com/api/';
    var apiKey = '1ab2-01bd45-30dab-22232';
    var url2 = url;
    function request (path, method) {
        url = url2 + path + apiKey;
        console.log(url);
       // return http.requestSync(url, method);
    }   
    var users = request('/users', 'GET');
    var cities = request('/cities', 'GET');
})();
// url = url +... so it needed another variable for the other url.

// Exercise 1.4

var b;

(function() {
   var a = b; 
   var b = 5;
})();

console.log(b);
console.assert(b === undefined);
// Each variable needed a var so that it didn't "leak." 
// In order to get undefined you have to log it in the global but if you want 5 you log it in the local...

// Part 2

// a comment containing values in the order they are logged from code snippet in Part 2.

var x = 1;
var a = 5;
var b = 10;

var c = function (a, b, c) {
    var x = 10;

    console.log(x); 
    console.log(a); 
   

    var f = function (a, b, c) {
        var x = 5;
        b = a;
        console.log(b); 
        b = c;
    }

    f(a, b, c);

    console.log(b); 
 }

c(8, 9, 10);

// answer : 10(74) 8 ,8 (line 81 - 90,  78- 71 - 90) 9 (line 71- 87)