def base_convert(n, base):
    result = ''
    while n > 0:
        result = str(n % base) + result
        n = n // base
    rresult = result[::-1]
    return result == rresult

class Solution:
    def isStrictlyPalindromic(self, n: int) -> bool:
        for i in range(2, n-1):
            if (not base_convert(n, i)):
                return False
        return True   
