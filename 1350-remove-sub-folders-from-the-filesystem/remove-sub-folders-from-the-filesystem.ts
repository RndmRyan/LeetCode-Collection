function removeSubfolders(folder: string[]): string[] {
    folder.sort();
    let mains: string[] = [];

    for(const file of folder){
        if (mains.length===0 || !file.startsWith(mains[mains.length-1]+'/'))
            mains.push(file);
    }

    return mains;
};