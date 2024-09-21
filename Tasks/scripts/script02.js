class shape {
    constructor(width , height ){
    this.width = width 
    this.height = height
}
display(){
    throw "error"
}
}

class squire extends shape {
    display(){
        let area = this.height * this.width
        console.log(area);
    }
}
class rectangle extends shape {
    display(){
        let area = this.height * this.width
        console.log(area);
    }
}
class circle extends shape {
    display(){
        let area = Math.PI * (this.width/2) ** 2 
        console.log(area);
    }
}


let squire1 = new squire(20 , 20)
squire1.display()
let rectangle1 = new rectangle(20 , 40)
rectangle1.display()
let circle1 = new circle(4)
circle1.display()








