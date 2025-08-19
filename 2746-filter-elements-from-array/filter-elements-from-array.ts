type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let finalarr: number[] = []
    arr.forEach((val, idx) => {
        if(fn(val,idx)) {finalarr.push(val)}
    })
    return finalarr
};