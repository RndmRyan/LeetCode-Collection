class Solution:
    def minLength(self, s: str) -> int:

        found = True
        while found == True:
            found = False
            if 'AB' in s:
                index = s.find('AB')
                s = s[:index]+s[index+2:]
                found = True
            elif 'CD' in s:
                index = s.find('CD')
                s = s[:index]+s[index+2:]
                found = True
        return len(s)