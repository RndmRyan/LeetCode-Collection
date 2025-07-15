function isValid(word: string): boolean {
    if (word.length < 3) return false
    else if (!(/^[a-z0-9]+$/i.test(word))) return false;
    else return ((/[aeiou]/i.test(word)) && (/[b-df-hj-np-tv-z]/i.test(word))); 
};