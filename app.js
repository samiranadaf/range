/*function range(first,second){
    
    for(let i=first;i<=second;i++)
    {
        console.log(i);
    }
}
range(4,8);
*/
var rangeOfNumbers = function (start_num, end_num) {
    if (end_num - start_num === 2) {
        return [start_num + 1];
    }
    else {
        var list = rangeOfNumbers(start_num, end_num - 1);
        list.push(end_num - 1);
        return list;
    }
};

console.log(rangeOfNumbers(2, 9));  