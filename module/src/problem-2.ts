{
//problem-2

function removeDuplicates(params: number[]): number[] {
    const uniqueArray: number[] = [];
    const checkDuplication = new Set<number>()
    for (let i = 0; i < params.length; i++) {
        if (!checkDuplication.has(params[i])) {
            uniqueArray.push(params[i])
            checkDuplication.add(params[i])
        }
    }
    console.log(uniqueArray)
    return uniqueArray
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])
}