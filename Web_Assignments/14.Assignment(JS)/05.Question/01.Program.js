const Num = [12,56,755,27,16,2,1104,65,88];

for(let i = 0; i < Num.length;i++ )
{
    if(Num[i] % 3 == 0)
    {
        console.log(Num[i],"is divisible by 3");
    }
    else if(Num[i] % 8 == 0)
    {
        console.log(Num[i],"is divisible by 8");
    }
    else
    {
        console.log(Num[i],"is not divisible by 8 and 3");
    }
}