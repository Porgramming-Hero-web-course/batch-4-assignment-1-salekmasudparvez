{
    //problem 6 

    // Sample Input :
    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    const updateProfile = (obj: Profile, objUpdateKey: Partial<Profile>): Profile => {
        console.log({ ...obj, ...objUpdateKey })
        return { ...obj, ...objUpdateKey }
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

    console.log(updateProfile(myProfile, { age: 26 }));

}