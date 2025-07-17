class FindSumPairs {
    private nums1:number[];
    private nums2:number[];
    private countx:Map<number, number>;
    private count1:Map<number, number>;


    constructor(nums1: number[], nums2: number[]) {
        this.nums1 = nums1;
        this.nums2 = nums2; 
        this.countx = new Map();
        for(const num of nums2)
            this.countx.set(num, ((this.countx.get(num)||0)+1));
        this.count1 = new Map();
        for(const num of nums1)
            this.count1.set(num, ((this.count1.get(num)||0)+1));
    }

    add(index: number, val: number): void {
        const oldVal = this.nums2[index];
        this.countx.set(oldVal, (this.countx.get(oldVal) || 0) - 1);

        this.nums2[index] += val;

        const newVal = this.nums2[index];
        this.countx.set(newVal, (this.countx.get(newVal) || 0) + 1);
    }

    count(tot: number): number {
        let ans = 0;
        for (const [num1, freq1] of this.count1) {
            const rest = tot - num1;
            const freq2 = this.countx.get(rest) || 0;
            ans += freq1 * freq2;
        }
        return ans;
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */