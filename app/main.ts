import {bootstrap} from "angular2/platform/browser"
import {MainClass} from "./app.component"

bootstrap(MainClass);

let mainObj = new MainClass();

mainObj.showString();


interface CurrInterface{
    currentString: string;
    currentNumber: number;
}

class CurrentMainClass implements CurrInterface{
    currentString : string;
    currentNumber : number;

    constructor(){
        this.currentString = 'CURR STRING';
        this.currentNumber = 999;

        console.log('currentString:', this.currentString, ' ::: currentNumber:', this.currentNumber);
    }

}

this.curr_main = new CurrentMainClass();
//-------------------------------------------------------------------------------------------



function getArrayLength(x: string[]) {
    var len = x[0].length;
    return len;
}

var names = ['John', 'Dan', 'Aaron', 'Fritz'];
console.log(getArrayLength(names))

var people = [{name: 'Aaron'}, {name: 'Fritz'}];
console.log(getArrayLength(people))//--------------------return undefined because array of objects (nor string)

var myFunc2 = (h: number, w: number) => h * w;

console.log('LAMBDA FUNCTION (3*5):', myFunc2(3, 5));

//--------------------------------------------------------------------------------

class GlobalTestClass {
    private a = 'Private a';
    public b = 'Public b';
}

var globclass = new GlobalTestClass();
console.log('GLOBAL TEST CLASS INSTANCE:', globclass);


module Shapes {
    export class Rectangle {
        //private privateVar = 'privateVar';

        constructor (
            public height: number,
            public width: number) {
        }
    }
    // This works!
    // var rect1 = new Rectangle(10, 4);
}
console.log('SHAPES 1:', Shapes);

var rect2 = Shapes.Rectangle(10, 4);
console.log('SHAPES 2:', rect2);
