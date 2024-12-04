 {
 //problem 1

 function sumArray(array: number[]): number {
    let totalOfSum: number = 0
    for (let i = 0; i < array.length; i++) {
        totalOfSum = totalOfSum + array[i]
    }
    console.log(totalOfSum)
    return totalOfSum
}
sumArray([1, 2, 3, 4, 5]);
 }