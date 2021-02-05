var name='Kuddus';
function add(num1,num2){
     window.result =num1+num2;
    console.log('result insiad', name);
    function double(num){
        return num*2;
    }
    var total=double(result);
    return total;
}
console.log('result outside',name);
console.log('result outside',result);
var sum=add(13,21);
console.log(sum);
console.log('result outside',result);
