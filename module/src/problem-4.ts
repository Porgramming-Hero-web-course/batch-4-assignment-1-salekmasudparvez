{
     //problem 4
     type Circle = {
        shape: string;
        radius: number;
    }
    type Triangle = {
        shape: string;
        width: number;
        height: number;
    }

    const calculateShapeArea = (data: Circle | Triangle) => {
        if ('radius' in data) {
            console.log(Math.PI * data.radius * data.radius)
            return (Math.PI * data.radius * data.radius)
        } else if ('width' in data && 'height' in data) {
             console.log(data.height * data.width)
            return (data.height * data.width)
        }
    }
    // Sample Input 1:
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 })
    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

}