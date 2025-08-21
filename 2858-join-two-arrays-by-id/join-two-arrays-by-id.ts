type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {

    const tempMap = new Map()
    for (const item of arr1)
        tempMap.set(item.id, { ...item });


    for (const item of arr2)
    {
        if(!tempMap.has(item.id))
            tempMap.set(item.id, { ...item })
        else
        {
            for (const key of Object.keys(item)) 
                tempMap.get(item.id)[key] = item[key]
        }
    }
    return Array.from(tempMap.values()).sort((a, b)=> a.id - b.id);
};