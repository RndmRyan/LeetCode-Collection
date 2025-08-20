type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const memory = new Map()
    
    return function(...args) {
        let key = JSON.stringify(args);
        if (memory.has(key))
            return memory.get(key)

        const ans = fn(...args)
        memory.set(key, ans)
        return ans
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */