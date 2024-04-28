class Solution:
    def repeatedCharacter(self, s: str) -> str:
        newlet = []
        for i in range(len(s)):
            if s[i] in newlet:
                return s[i]
            else:
                newlet.append(s[i])