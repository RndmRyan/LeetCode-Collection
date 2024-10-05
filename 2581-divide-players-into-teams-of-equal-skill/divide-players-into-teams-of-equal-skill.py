class Solution:
    def dividePlayers(self, skill: List[int]) -> int:

        #chemistry calculator
        def calcChemistry(self, teams: List[List[int]]) -> int:
            sum = 0
            for i in teams:
                sum += i[0] * i[1]
            return sum

        #calculations
        reqteamskill = sum(skill) / (len(skill)/2)
        remainingskill = sum(skill) % (len(skill)/2)
        lengt = len(skill)
        teamlen = int(lengt/2)-1

        if (remainingskill) != 0:
            return -1

        #sort list
        skill.sort()

        #check if both sides are equal in lenght
        if ((skill[teamlen] == skill[teamlen+1]) and (skill[teamlen] != int(reqteamskill/2))) or (skill[teamlen] + skill[teamlen+1] != reqteamskill):
            return -1
        else:
            finalteams = []

            #grp from each end only if sum equal reqteamskill
            for i in range(teamlen+1):
                if (skill[i]+skill[lengt-i-1] == reqteamskill):
                    finalteams += [[skill[i],skill[lengt-i-1]]]
                else:
                    return -1
            return calcChemistry(None, finalteams)