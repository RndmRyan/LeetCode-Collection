function recurs(n:number, lasti:number): boolean {
    let i=lasti;
    while (i>0 && Math.pow(3, i)>n) i--;
    if (i < 0) return false;

    if(Math.pow(3, i) == n) 
        return true
    else
    {
        if(recurs(n - Math.pow(3, i), i-1)) 
            return true
        return false
    }
}

function checkPowersOfThree(n: number): boolean {
    return recurs(n,16)
};

