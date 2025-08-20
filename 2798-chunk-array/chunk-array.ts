type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let reply :Obj[][] = []
    if (!arr.length)
        return reply
    let i=0;
    for (;i+size<arr.length; i+=size)
        reply.push(arr.slice(i, i+size))
    reply.push(arr.slice(i))
    return reply
};