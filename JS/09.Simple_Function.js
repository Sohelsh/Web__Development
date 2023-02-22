function Caluc(Arr)
{
    let Ans = [];
    for(let i = 0; i <= Arr.length - 1;i++)
    {
        Ans[i] = Squre(Arr[i]);
    }
    console.log(Ans);
}
const Squre = function(X)
{
    return X * X;
}
var Value = [10,15,25]
 Caluc(Value);