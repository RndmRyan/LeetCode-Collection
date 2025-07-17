function maximumDifference(nums: number[]): number {
    let maxdif = -1;
    for(let i=0; i<nums.length-1; i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]<nums[j] && nums[j]-nums[i] > maxdif)
                maxdif = nums[j]-nums[i];
        }
    }
    return maxdif
};