
function Result(Fun,Arr)
{
    let NewArr = new Array(Arr.length);

    for(let i = 0;i <= Arr.length -1;i++)
    {
        NewArr[i] = Fun(Arr[i]);
    }
    return NewArr;
}

const Fun = function(X)
{
    return X * X * X;
}

var Values = [10,20,30,40,50];
var Ret = Result(Fun,Values);

console.log(Ret);