function mostCommonWord(paragraph: string, banned: string[]): string {
    //split sentence at each word/space
    //save them in a hash/map where each word is a key and hold count in value
    //before checking make sure to only use lowercase letters

    const words = paragraph
        .replace(/[!?',;.]/g, ' ')
        .toLowerCase()
        .split(" ")
        .filter(Boolean);
    
    const bannedSet = new Set(banned);
    const count: Map<string, number> = new Map();

    for(const word of words)
        if(!bannedSet.has(word))
            count.set(word, (count.get(word) || 0) + 1);
    
    
    let finalword = "";
    let maxval = 0;
    for (const [key, value] of count.entries()) {
        if(value>maxval)
        {
            finalword = key;
            maxval = value;
        }
    }

    return finalword
};