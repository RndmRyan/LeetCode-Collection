def isPalindrome(n):
    reversed_n = n[::-1]
    return n == reversed_n

def base_convert(n, base):
    digits = '0123456789'
    
    result = ''
    while n > 0:
        result = digits[n % base] + result
        n = n // base
    return result or '0'

class Solution:
    def isStrictlyPalindromic(self, n: int) -> bool:
        for i in range(2, n-1):
            res = base_convert(n, i)
            if (not isPalindrome(res)):
                return False
        return True   
