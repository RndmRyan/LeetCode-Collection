class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        devices = [bankrow.count("1") for bankrow in bank if bankrow.count("1")>0]        
        beams = 0
        for i in range(len(devices)-1):
            beams += devices[i]*(devices[i+1])
        return beams