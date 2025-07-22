function minimumRecolors(blocks: string, k: number): number {
    let currcount = 0;

    for(let i=0; i<k; i++)
        if (blocks[i] === 'W') currcount++;
    
    let mincount = currcount;

    for(let i=k; i<blocks.length; i++)
    {
        if (blocks[i-k] === 'W') currcount--;
        if (blocks[i] === 'W') currcount++;
        
        mincount = Math.min(mincount, currcount);
        if (mincount === 0) return 0;
    }
    return mincount;
};