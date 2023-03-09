const Num = [85,75,12,65,76,35,24,13,58];
var Max = 0;
var Min = 0;
var SMax = 0;

for(let i = 0;i <= Num.length - 1;i++)
{
    if(Max < Num[i])
    {
         Max = Num[i];
        
    }
}
Min = Num[0];
for(let i = 0;i <= Num.length - 1;i++)
{
    if(Min > Num[i])
    {
         Min = Num[i];
        
    }
}
for(let i = 0;i < Num.length;i++)
{
       if(SMax < Num[i] && Max != Num[i])
       {
         SMax = Num[i];
       }
      
}
 console.log(Max);
 console.log(Min);
 console.log(SMax);