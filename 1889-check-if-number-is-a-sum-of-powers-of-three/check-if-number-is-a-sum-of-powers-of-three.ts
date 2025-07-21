function recurs(n:number, lasti:number): boolean {
    while (lasti>0 && Math.pow(3, lasti)>n) lasti--;
    if (lasti < 0) return false;

    if(Math.pow(3, lasti) == n) 
        return true
    else
    {
        if(recurs(n - Math.pow(3, lasti), lasti-1)) 
            return true
        return false
    }
}

function checkPowersOfThree(n: number): boolean {
    return recurs(n,16)
};

