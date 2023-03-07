var No = 19;
var i = 0;

for( i = 2;i < No;i++)
{
    if(No % i == 0)
    {
        break;
    }
}
if(i == No)
{
    console.log("Given Number Is Prime");
}
else
{
    console.log("Given Number Is Not Prime");
}