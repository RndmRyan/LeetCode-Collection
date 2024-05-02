class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        devices = [bankrow.count("1") for bankrow in bank]
        beams = 0

        for i in range(len(devices)):
            if devices[i] != 0:
                for j in range(i+1, len(devices)):
                    if devices[j] != 0:
                        beams += devices[i] * devices[j]
                        break
        return beams