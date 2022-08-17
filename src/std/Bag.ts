import Container from "../obj/Container";

export default class Bag extends Container{
 getInfo(): String {
     let result = ""
     for (let i of this.Contents) {
        result += ", " + i.Name
     }
     return `w środku dostrzegasz: ${result}`
 }   
}