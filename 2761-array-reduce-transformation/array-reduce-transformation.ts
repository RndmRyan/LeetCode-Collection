type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if(nums.length)
    {    nums.forEach(val => { init = fn(init, val) })
        return init
    }
    return init
};