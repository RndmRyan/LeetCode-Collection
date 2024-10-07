class Solution:
    def minLength(self, s: str) -> int:

        found = True
        while found == True:
            found = False
            if 'AB' in s:
                s = s.replace('AB', '')
                found = True

            elif 'CD' in s:
                s = s.replace('CD', '')
                found = True

        return len(s)