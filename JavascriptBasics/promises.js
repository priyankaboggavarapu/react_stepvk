var x = 1;
var promise = new Promise(
    function (resolve, reject) {
        if (x == 10) {
            resolve("Hey It's cool");
        } else {
            reject("It's rejcted");
        }
    }
);

promise.then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
});