var Y = [10.20,30.20,40.50,90.20,70.50];
var Find_Index = 1; // Which Index Find
var New_Value = 21.30;

console.log("Before Element Of Array:",Y);

for(let i = 0; i <= Y.length - 1;i++)
{
    if(i == Find_Index)
    {
        Y[Find_Index] = New_Value
    }
}
console.log("After Element Of Array:",Y);