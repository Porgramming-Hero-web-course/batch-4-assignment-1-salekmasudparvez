{
    //problem 8
    const validateKeys = <T extends object>(obj: T, array: (keyof T)[]) => {

        for (let i = 0; i < array.length; i++) {
            if (!(array[i] in obj)) {
                return false
            }
        }
        return true
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}