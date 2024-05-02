def base_convert(n, base):
    result = ''
    rresult = ''
    while n > 0:
        next = str(n % base)
        result = next + result
        rresult += next 
        n = n // base
    return result == rresult

class Solution:
    def isStrictlyPalindromic(self, n: int) -> bool:
        for i in range(2, n-1):
            if (not base_convert(n, i)):
                return False
        return True   
