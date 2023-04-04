const Num = [12,56,755,27,16,2,1104,65,88];

var i = 0;

while(i < Num.length)
{
    switch(true)
    {
        case (Num[i] % 3 == 0):
            {
                console.log(Num[i],"Is divisible by 3");
            }
            break;
        case (Num[i] % 8 == 0):   
            {
                console.log(Num[i],"Is divisible by 8");
            }
        break;
        default:
            {
                console.log(Num[i],"Is not divisible by 8 and 3");
            }
    }

    i++;
}