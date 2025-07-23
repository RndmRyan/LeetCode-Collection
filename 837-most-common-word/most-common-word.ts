function mostCommonWord(paragraph: string, banned: string[]): string {
    //split sentence at each word/space
    //save them in a hash/map where each word is a key and hold count in value
    //before checking make sure to only use lowercase letters

    const words = paragraph.replaceAll(/[!|?|'|,|;|.]/g, ' ').toLowerCase().split(" ");
    let collect = new Map();

    for(const word of words)
        collect.set(word, (collect.get(word)+1||1));
    for(const word of banned)
        collect.delete(word);
    collect.delete('');

    console.log(collect);

    let finalword = "";
    let maxval = 0;
    collect.forEach(function(value, key) {
        if(value>maxval)
        {
            finalword = key;
            maxval = value;
        }
    })

    return finalword
};