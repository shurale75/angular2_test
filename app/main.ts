import {bootstrap} from "angular2/platform/browser"
import {MainClass} from "./app.component"

bootstrap(MainClass);

let mainObj = new MainClass();

mainObj.showString();


interface CurrInterface{
    currentString: string;
    currentNumber: number;
}

class CurrentMainClass{

}

