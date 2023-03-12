const strFirst = "madam";


const Size = strFirst.length;

if(Check_Palindrom(strFirst) == 1) //Function Call
{
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}

  function Check_Palindrom()
  {
    for(let i = 0 ; i < strFirst.length /2 ;i++)
    {
        if(strFirst[i] != strFirst[Size -1 - i])
        {
            return 0;
        }
    
    }
    return 1;
  }