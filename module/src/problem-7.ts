{
     //problem 7

     class Car {
        name: string;
        model: string;
        year: number

        constructor(name: string, model: string, year: number) {
            this.name = name;
            this.model = model;
            this.year = year;
        }

        getCarAge() {
            const carBuyYear = this.year;
            const currentYear = new Date().getFullYear();
             console.log(`${Math.abs(currentYear - carBuyYear)}(assuming current year is ${new Date().getFullYear()})`)
        }

    }
    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge();
}