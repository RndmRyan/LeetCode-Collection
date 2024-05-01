class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return 0
        else:
            nums = sorted(nums)
            diffs = []
            for i in range(len(nums)-1):
                diffs.append(nums[i+1]-nums[i])

            return max(diffs)