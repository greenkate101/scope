// exercise 1.1


function pow (x, n) {
    var a = x;
    for (var i = 1; i < n; i++) {
        a *= x;
    }
    // return a;
    console.log(x, n);
}
var a = 2;
pow(3, a);
pow(2, a);

// exercise 1.2

var i = 0;

var logNTimes = function (str, n) {
    // i = 0; --- The i = 0; isn't necessary since the variable is in the global scope.
    while (i < n) {
        console.log(str);
        i++;
    }
};

while (i < 3) {
    logNTimes('Work', 6);
    i++;
}

// It was only printed twice but then I changed the number in the "parent" or global scope to 6. I think I'm missing more....

// Exercise 1.3

// (function () {
//     var url = 'http://openweathermap.com/api/'
//     var apiKey = '1ab2-01bd45-30dab-22232';

//     function request (path, method) {
//         url = url + path + apiKey;
//          return http.requestSync(url, method);
        
//     }

//     var users = request('/users', 'GET');
//     var cities = request('/cities', 'GET');
// })();

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
    // first 10
    console.log(a); 
    // second 8

    var f = function (a, b, c) {
        var x = 5;
        b = a;
        console.log(b); 
        // fourth 9
        b = c;
    }

    f(a, b, c);

    console.log(b); 
    // third 8
 }

c(8, 9, 10);