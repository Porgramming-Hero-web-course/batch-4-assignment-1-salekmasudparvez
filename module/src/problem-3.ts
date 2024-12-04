{
     //problem 3

     function countWordOccurrences(sentence: string, word: string): number {
        const getArrayOfSentence: string[] = sentence.split(' ');
        let count = 0
        for (let i = 0; i < getArrayOfSentence.length; i++) {
            const wordFromSentence: string = getArrayOfSentence[i].toLowerCase();
            const exectWord: string = word.toLowerCase();
            if (wordFromSentence === exectWord) {
                count = count + 1
            }
        }
        console.log(count)
        return count
    }
    countWordOccurrences("I love typescript ", "typescript");
}