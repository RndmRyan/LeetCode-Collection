class FindSumPairs {
    private nums1:number[];
    private nums2:number[];
    private countx:Map<number, number>;

    constructor(nums1: number[], nums2: number[]) {
        this.nums1 = nums1;
        this.nums2 = nums2; 
        this.countx = new Map();
        for(const num of nums2)
            this.countx.set(num, ((this.countx.get(num)||0)+1));
    }

    add(index: number, val: number): void {
        this.countx.set(this.nums2[index], (this.countx.get(this.nums2[index]) || 0) - 1);
        this.nums2[index] += val;
        this.countx.set(this.nums2[index], (this.countx.get(this.nums2[index]) || 0) + 1);
    }

    count(tot: number): number {
        let ans = 0;
        for (const j of this.nums1)
            ans += this.countx.get(tot - j) || 0;
        return ans;
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */