var personName = "kuddus";
function add(num1, num2) {
    var result = num1 + num2;
    console.log("name inside ", personName);
    function double(num) {
        return num * 2;
    }
    var total = double(result);
    return total;
}
console.log("name outside ", personName);
var sum = add(13, 21);
console.log(sum);