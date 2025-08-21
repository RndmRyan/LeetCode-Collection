interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const output = {}
    for(const i of this) 
    {
        const ans = fn(i)
        if (!(ans in output))
            output[ans] = []
        output[ans].push(i)
    }
    return output
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */