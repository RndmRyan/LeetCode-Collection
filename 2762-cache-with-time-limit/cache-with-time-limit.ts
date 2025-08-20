class TimeLimitedCache {
    private x

    constructor() {
        this.x = new Map([])
    }
    
    set(key: number, value: number, duration: number): boolean {
        let existed: boolean = this.x.has(key)
        
        if (existed)
            clearTimeout(this.x.get(key).timerID)

        this.x.set(key,{value, timerID: setTimeout(()=>{this.x.delete(key)}, duration)})
        return existed
    }

    get(key: number): number {
        if (this.x.has(key))
            return this.x.get(key).value
        else return -1
    }
    
    count(): number {
        return this.x.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */