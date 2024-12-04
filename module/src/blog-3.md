# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Type guard is important for type safety in runtime . It make easier to work in enterprise level for type checking and remove error.

Now here is some types of **Type Guards** and their use cases:
**1. Using typeof :**  'typeof' use for checking primitives types (`string`, `number`, and `boolean`)
```bash
const getValue=(value: number | string | boolean)=> {
  if (typeof value === 'number') {
    console.log(`Number value: ${value}`);
  } else if (typeof value === 'string') {
    console.log(`String value: ${value}`);
  } else if (typeof value === 'boolean') {
    console.log(`Boolean value: ${value}`);
  }
}

handleValue(10);        // Output: Number value: 10
handleValue("hello");   // Output: String value: hello
handleValue(true);      // Output: Boolean value: true

```
**2. Custom type guard :**  using custom type guard we can reduce error :
```bash
type  AdminUser  ={
name:string;
role:'admin'
}
type  NormalUser  ={
name:string;
}
const  getUser  =(user:AdminUser|NormalUser)=>{
if('role'  in  user){
console.log(`My name is ${user.name} and role ${user.role}`)
}else{
console.log(`My name is ${user.name}`)
}}
const  admin:AdminUser  ={
name:'Parvez',
role:'admin'
}
const  normalUser:NormalUser={
name:"Ritu"
}
getUser(admin)//output : My name is Parvez and role admin
```
**3. instanceof  Type Guard :**  Checking if an object is an instance of a specific class or constructor function. example:
```bash
class  Animal {
name:string;
spacies:string;

constructor(name:string,spacies:string){
this.name=name;
this.spacies=spacies
}

makesound(){
console.log(`i am making sound`)
}
}
class  Dog  extends  Animal {
constructor(name:string,spacies:string){
super(name,spacies)

}
makeBark (){
console.log('I am barking')
}

}

class  Cat  extends  Animal {
constructor(name:string,spacies:string){
super(name,spacies)
}

makeMeaw (){
console.log('I am meawing')
}
}

const  dog  =  new  Dog('Dog vai','Dog')
const  cat  =  new  Cat('Cat vai','Cat')
const dog = new Dog('Dog vai', 'Dog');
const cat = new Cat('Cat vai', 'Cat');

// Calling methods
dog.makesound();  // Output: I am making sound
dog.makeBark();   // Output: I am barking

cat.makesound();  // Output: I am making sound
cat.makeMeaw();   // Output: I am meawing

```
