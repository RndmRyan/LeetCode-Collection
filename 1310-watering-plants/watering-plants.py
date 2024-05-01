class Solution:
    def wateringPlants(self, plants: List[int], capacity: int) -> int:
        steps = 1
        curcapacity = capacity
        
        for i in range(len(plants)-1):
            curcapacity -= plants[i]
            if plants[i+1] > curcapacity:
                curcapacity = capacity
                steps += i*2+2
            steps+=1

        return steps